import React from "react";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorPage";
import {graphql} from "react-apollo";
import {Container, Header, Placeholder} from "semantic-ui-react";

const ContentPage = ({data: {loading, error, page}}) => {
  if (error) return <h1>Error</h1>;
  if (loading)
    return (
      <Container text>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Header>
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Container>
    );
  if (page) {
    return (
      <Container text>
        <Header>{page.headlineEN}</Header>
        <div dangerouslySetInnerHTML={{__html: page.contentEN.html}} />
      </Container>
    );
  }
  return <ErrorMessage />;
};

const Page = gql`
  query singlePage($slug: String!) {
    page(where: {slug: $slug}) {
      headlineEN: headline(locale: EN)
      contentEN: content(locale: EN) {
        html
      }
      slug
    }
  }
`;

export default graphql(Page, {
  options: ({match}) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(ContentPage);
