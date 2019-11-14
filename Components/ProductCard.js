import React from "react";
import { Card, Image } from "semantic-ui-react";
import Link from "next/link";
import { graphCmsImageUrl } from "../utils/lib";
import "./ProductCard.css";
import CompanyLogo from "./CompanyLogo";
import ProductTag from "./ProductTag";

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    const premium =
      product.company !== null &&
      (product.company.premium === true || product.premium ? true : false);
    const categoryClass = premium ? "premium" : "standard";

    if (!premium) product.tags.length = 3;

    let productImage;
    if (product.image.length > 0)
      productImage = (
        <div className="image-container">
          <Image
            alt={product.name}
            src={graphCmsImageUrl(product.image[0].handle, {
              height: 200,
              width: 215
            })}
          />
        </div>
      );
    return (
      <Card
        key={`product-${product.id}`}
        className={`product-card ${categoryClass}`}
      >
        {productImage}
        <Card.Content>
          <Card.Header className="product-name">
            <Link href={`/product/${product.slug}`}><a>{product.name}</a></Link>
          </Card.Header>
          <div className="Product-tags">
            {product.tags.map(tag => (
              <ProductTag key={tag.slug} {...tag} />
            ))}
          </div>
          <Card.Description className="tagLine-card">
            {premium ? product.tagLine : ""}
          </Card.Description>
        </Card.Content>
        {product.company !== null && (
          <Card.Content className="logo-content">
            <CompanyLogo company={product.company} showLogo={premium} />
          </Card.Content>
        )}
      </Card>
    );
  }
}

export default ProductCard;
