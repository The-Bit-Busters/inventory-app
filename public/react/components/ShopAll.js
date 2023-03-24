import Carousel from "./Carousel";
import React, {useState} from "react";
import { Button } from "react-bootstrap";
import "../stylesheets/shopAll.css";
import AddModal from "./AddModal";
import apiURL from "../api"

const ShopAll = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = () => {
    setShowModal(!showModal);
    console.log(showModal)
  }
  const onClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  const addItems = async (event) => {
    window.location.reload();
    console.log('clicked')
    const response = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price, image, category }),
    });
    if (response.ok) {
      const item = await response.json();
      console.log("Item added:", item);
    } else {
      console.error("Failed to add item:", response);
    }
  };


  const mensItems = items.filter((item) => item.category === "mens");
  const womensItems = items.filter((item) => item.category === "womens");
  const shoesItems = items.filter((item) => item.category === "shoes");
  

  return (
    <div className="productsContainer">
      <section className="products-section">
        <h2 id="featured-title">Menswear</h2>
        <Carousel items={mensItems} />
      </section>
      <section className="products-section">
        <h2 id="featured-title">Womenswear</h2>
        <Carousel items={womensItems} />
      </section>
      <section className="products-section">
        <h2 id="featured-title">Shoes</h2>
        <Carousel items={shoesItems} />
      </section>
      
      <Button onClick={handleClick}  variant="dark" size="md" className="mt-4 w-100">
      ADD ITEM
      </Button>
      {showModal && (
                <AddModal
                  setTitle={setTitle}
                  setDescription={setDescription}
                  setPrice={setPrice}
                  handleClick={handleClick}
                  title={title}
                  description={description}
                  price={price}
                  category={category}
                  setCategory={setCategory}
                  image={image}
                  setImage={setImage}
                  onClose={onClose}
                  addItems={addItems}
                />
              )}
    </div>
  );
};

export default ShopAll;
