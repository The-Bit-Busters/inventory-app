import React from "react";
import "../stylesheets/productpage.css";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export function ProductPage({ items, addToCart }) {
  const { id } = useParams();
  for (let i = 0; i < items.length; i++) {
    if (items[i].id == id) {
      return (
        <div className="productPage">
          <section className="singularProduct">
            <div className="containerLeft">
              <img
                src={items[i].image}
                className="specificProductImg"
                alt={items[i].title}
              />
              <button className="productButton">Update Item</button>
            </div>
            <div className="productDescription">
              <h1 className="productTitle">{items[i].title}</h1>
              <p className="productPrice">${items[i].price}</p>
              <div className="productSpecs">
                <p>
                  {" "}
                  <span>Product Description:</span> {items[i].description}
                </p>
              </div>
              <div className="cartButtons">
                <Button
                  onClick={() => addToCart(items[i].id)}
                  variant="dark"
                  size="md"
                  className="mt-4 w-100 addToCartBtn"
                >
                  Add to Cart
                </Button>
                <Link to="/cart">
                  <Button variant="dark" size="md" className="mt-4 w-100">
                    View Cart
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}
