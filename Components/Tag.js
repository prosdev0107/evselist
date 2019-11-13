import React from "react";
import gql from "graphql-tag";
import {Container} from "semantic-ui-react";
import {graphql} from "react-apollo";
import "./Tag.css";
import ProductGrid from "./ProductGrid";

const Tag = ({data: {loading, error, tag}}) => {
  if (error) return <h1>Error</h1>;
  return (
    <Container>
      <ProductGrid products={tag ? tag.products : null} />
    </Container>
  );
};

export const singleTag = gql`
  query singleTag($slug: String!) {
    tag(where: { slug: $slug }) {
      id
      slug
      name
      products(orderBy: updatedAt_DESC) {
        name
        slug
        tags {
          name
          id
          slug
          description
        }
        image {
          handle
        }
        premium
        company {
          name
          premium
        }
      }
      description
    }
  }
`;

export default graphql(singleTag, {
  options: ({match}) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Tag);
