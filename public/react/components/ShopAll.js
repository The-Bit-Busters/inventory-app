import Carousel from "./Carousel";
import React from "react";

const ShopAll = ({ items }) => {
  const mensItems = items.filter((item) => item.category === "mens");
  const womensItems = items.filter((item) => item.category === "womens");
  const shoesItems = items.filter((item) => item.category === "shoes");
  return (
    <div>
      <section className="features-section">
        <h2 id="featured-title">Men's Clothing</h2>
        <Carousel items={mensItems} />
      </section>
      <section className="products-section">
        <h2 id="featured-title">Women's Clothing</h2>
        <Carousel items={womensItems} />
      </section>
      <section className="products-section">
        <h2 id="featured-title">Shoes</h2>
        <Carousel items={shoesItems} />
      </section>
    </div>
  );
};

export default ShopAll;
