import React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard";
import ProductCardPlaceholder from "./ProductCardPlaceholder";

class ProductGrid extends React.Component {
  render() {
    if (!this.props.products || this.props.products.length < 1)
      return (
        <section className="masonry container">
          {[...Array(5)].map((e, i) => (
            <ProductCardPlaceholder key={i} />
          ))}
        </section>
      );
    return (
      <section className="masonry container">
        {this.props.products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </section>
    );
  }
}

export default ProductGrid;
