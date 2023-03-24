import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/homepage.css";
import Form from "./Form";

export function HomePage({ items }) {
  const [featured, setFeatured] = useState([]);
  const [topSellers, setTopSellers] = useState([]);
  const [product, setProduct] = useState([]);

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

  async function specificProduct() {
    const response = await fetch(`${apiURL}/items/${id}`);
    const productData = await response.json();
    setProduct(productData);
  }

  return (
    <div className="homepage">
      <section className="greeting">
        <h1 id="home-title">The Bit Bucket</h1>
      </section>
      <section className="picture-container">
        <section className="cta-btn">
          <h2 className="cta">THE PLATFORM FOR PERSONAL STYLE</h2>
          <section className="button-section">
            <Link to="/shopall" style={{ textDecoration: "none" }}>
              <button className="shopall-button">Shop All Items</button>
            </Link>
          </section>
        </section>
      </section>
      <h2 id="featured-title">FEATURED PRODUCTS</h2>
      <section className="features-section">
        {featured.map((item) => {
          return (
            <li className="product" key={item.id}>
              <Link
                to={`/product/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="randomizedImgs"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="productName">
                  {item.title.substring(0, 20)}...
                </h3>
              </Link>
            </li>
          );
        })}
      </section>
      <h2 id="featured-title">TOP SELLERS</h2>
      <section className="features-section">
        {topSellers.map((item) => {
          return (
            <li className="product" key={item.id}>
              <Link
                to={`/product/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="randomizedImgs"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="productName">{item.title.substring(0, 20)}</h3>
              </Link>
            </li>
          );
        })}
      </section>
    </div>
  );
}
