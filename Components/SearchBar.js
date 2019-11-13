import React, {Component} from "react";
import gql from "graphql-tag";
import {Search, Grid, Label} from "semantic-ui-react";
import debounce from "lodash.debounce";
import {withRouter} from "react-router";
import {withApollo} from "react-apollo";

const initialState = {isLoading: false, tags: [], filter: ""};

const resultRenderer = ({title, description}) => (
  <div>
    <Label content={title} />
    <div className="description">{description}</div>
  </div>
);

class SearchBar extends Component {
  state = initialState;

  executeSearch = async () => {
    const {filter} = this.state;
    const {client} = this.props;
    const result = await client.query({
      query: TAG_SEARCH_QUERY,
      variables: {filter}
    });
    const tags = result.data.tags;
    this.setState({tags});
  };

  handleResultSelect = (e, {result}) => {
    const {history} = this.props;
    history.push(`/tag/${result.slug}`);
  };

  handleSearchChange = (e, {value}) => {
    if (value.length < 2) return;
    this.setState({isLoading: true, filter: value});
    setTimeout(() => {
      this.executeSearch();
      this.setState({
        isLoading: false,
        results: this.state.tags
      });
    }, 300);
  };

  render() {
    const {isLoading, tags, filter} = this.state;
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={tags}
            filter={filter}
            placeholder="Filter..."
            resultRenderer={resultRenderer}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

const TAG_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    tags(where: {nameEN_contains: $filter}, first: 5) {
      title: name
      description
      slug
      id
    }
  }
`;

export default withRouter(withApollo(SearchBar));
