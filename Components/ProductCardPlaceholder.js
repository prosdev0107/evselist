import React from "react";
import {Placeholder, Label, Card} from "semantic-ui-react";

class ProductCardPlaceholder extends React.Component {
  render() {
    return (
      <Card className={`product-card`}>
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
        <Card.Content>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
          <div className="Product-tags">
            <Label>...</Label>
          </div>
          <Card.Description className="tagLine-card">
            <Placeholder>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Description>
        </Card.Content>
        <Card.Content className="logo-content">
          <Placeholder.Paragraph />
        </Card.Content>
      </Card>
    );
  }
}

export default ProductCardPlaceholder;
