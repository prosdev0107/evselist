import React from "react";
import { Link } from "react-router-dom";
import { Label, Popup, Grid, Button } from "semantic-ui-react";
import "./ProductTag.css";
import { isBrowser, isMobile } from "react-device-detect";

class ProductTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowTooltip: false
    };
  }

  hideTooltip = () => {
    this.setState({ isShowTooltip: false });
  };

  handleOpen = () => {
    this.setState({ isShowTooltip: true });
  };

  handleClose = () => {
    this.setState({ isShowTooltip: false });
  };

  render() {
    return (
      <>
        {isBrowser && (
          <Link
            className="tag"
            key={this.props.slug}
            to={`/tag/${this.props.slug}`}
          >
            <Popup
              trigger={
                <Label className="ui small label">{this.props.name}</Label>
              }
              content={this.props.description}
              on="hover"
            />
          </Link>
        )}
        {isMobile && (
          <Popup
            eventsEnabled
            on="click"
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            open={this.state.isShowTooltip}
            position="top center"
            trigger={
              <Label className="ui small label">{this.props.name}</Label>
            }
          >
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <p>{this.props.description}</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column floated="right" width={5}>
                  <Link key={this.props.slug} to={`/tag/${this.props.slug}`}>
                    <Button
                      secondary
                      icon="arrow alternate right"
                      circular
                      onClick={this.hideTooltip}
                    />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Popup>
        )}
      </>
    );
  }
}

export default ProductTag;
