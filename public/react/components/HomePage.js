import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/homepage.css";

export function HomePage({ items }) {
  const [featured, setFeatured] = useState([]);
  const [topSellers, setTopSellers] = useState([]);

  async function fetchFeaturedProducts() {
    let n = 3;
    const shuffled = items.sort(() => {
      return 0.5 - Math.random();
    });
    const selected = shuffled.slice(0, n);
    setFeatured(selected);
    return selected;
  }

  async function fetchTopSellers() {
    let n = 3;
    const shuffled = items.sort(() => {
      return 0.5 - Math.random();
    });
    const selected = shuffled.slice(0, n);
    setTopSellers(selected);
    return selected;
  }

  useEffect(() => {
    fetchFeaturedProducts();
    fetchTopSellers();
  }, [items]);


  return (
    <div className="homepage">
      <section className="greeting">
        <h1 id="home-title">The Bit Buckets Inventory!</h1>
        <h2>All things 🔥</h2>
      </section>
      <section className="features-section">
        <h2 id="featured-title">Featured Products</h2>
        <ul className="featured-parent">
          {featured.map((item) => {
            return (
              <li className="featured product" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="products-section">
        <h2 id="featured-title">Top Sellers</h2>

        <ul className="featured-parent">
        {topSellers.map((item) => {
            return (
              <li className="product" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="button-section">
        <Link to="/shopall" style={{ textDecoration: "none" }}>
          <button className="shopall-button">All Items</button>
        </Link>
      </section>
    </div>
  );
}
