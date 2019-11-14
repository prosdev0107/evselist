import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { graphCmsImageUrl, isPremium } from "../utils/lib";
import {
  Image,
  Container,
  Segment,
  Header,
  Placeholder,
  Grid
} from "semantic-ui-react";
import ProductTag from "./ProductTag";
import "./PremiumProduct.css";

const companyLinkBuilder = (company, premium, page) => {
  if (company.url == null) return company.name;
  const url =
    `${company.url}?utm_source=evselist.com&utm_medium=${page}&utm_campaign=` +
    (premium ? "premium_listing" : "free_listing");
  return <a href={url}>{company.name}</a>;
};

const PremiumView = ({ data: { loading, error, product } }) => {
  if (error) return <div>Error</div>;
  return (
    <Container>
      {!loading && product.image.length > 0 ? (
        <Segment vertical>
          <Image
            src={graphCmsImageUrl(product.image[0].handle, {
              height: 252,
              width: 693,
              fit: "max"
            })}
          />
        </Segment>
      ) : (
        <Segment placeholder textAlign="center">
          {loading ? (
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={5}>
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Image square />
                    </Placeholder.Header>
                  </Placeholder>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          ) : (
            <Header>No image available</Header>
          )}
        </Segment>
      )}
      <Segment vertical>
        {loading ? (
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        ) : (
          <>
            <Header as="h2">{product.name}</Header>
            {product.tagLine}
          </>
        )}
      </Segment>
      <Segment vertical>
        <div className="Product-tags">
          {product &&
            product.tags.map(tag => <ProductTag key={tag.slug} {...tag} />)}
        </div>
      </Segment>
      <Segment vertical>{product && product.description}</Segment>
      <Segment vertical>
        {loading ? (
          <Placeholder>
            <Placeholder.Line />
          </Placeholder>
        ) : (
          companyLinkBuilder(
            product.company,
            isPremium(product),
            "product_page"
          )
        )}
      </Segment>
    </Container>
  );
};

export const premiumSingleProduct = gql`
  query premiumSingleProduct($slug: String!) {
    product(where: { slug: $slug }) {
      id
      slug
      name
      image {
        handle
      }
      tagLine
      tags {
        name
        slug
        description
      }
      company {
        name
        id
        url
        logo {
          handle
        }
      }
      contact {
        name
        title
        phoneNumber
        emailAddress
        photo {
          handle
        }
      }
      description
    }
  }
`;

export default graphql(premiumSingleProduct, {
  options: ({ slug }) => ({
    variables: {
      slug
    }
  })
})(PremiumView);
