import React, { useState, useEffect } from "react";
import "../stylesheets/productpage.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import UpdateItemModal from "./UpdateModal";
import apiURL from "../api";



export function ProductPage({ items, addToCart }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const itemId = parseInt(id);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  const onClose = () => {
    setShowModal(false);
    window.location.reload();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${apiURL}/items/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price, image, category }),
    });
    if (response.ok) {
      const item = await response.json();
      console.log("Item updated:", item);
    } else {
      console.error("Failed to update item:", response);
    }
  };
  
    const handleDelete = () => {
    fetch('/api/items/id', { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          console.log('Item successfully deleted');
        } else {
          console.error('Could not delete item');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }


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
              <div className="product-buttons">
                <button className="productButton" onClick={handleClick}>
                  Update Item
                </button>
                <button className="productButton">Delete Item</button>
                <button className="productButton" onClick={() => navigate("/")}>
                  Go Back
                </button>
              </div>

              {showModal && (
                <UpdateItemModal
                  setTitle={setTitle}
                  setDescription={setDescription}
                  setPrice={setPrice}
                  handleSubmit={handleSubmit}
                  title={title}
                  description={description}
                  price={price}
                  category={category}
                  setCategory={setCategory}
                  image={image}
                  setImage={setImage}
                  item={items[i]}
                  onClose={onClose}
                />
              )}
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
                <button className="mt-4 w-100" onClick={handleDelete}>
                  Delete Item
                </button>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}
