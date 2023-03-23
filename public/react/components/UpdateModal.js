import React from "react";
import "../stylesheets/productpage.css";
function UpdateItemModal({
  item,
  onClose,
  handleSubmit,
  setTitle,
  setDescription,
  setPrice,
  title,
  description,
  price,
  setCategory,
  category,
  setImage,
  image,
}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <form className="updateForm" onSubmit={handleSubmit}>
          <label className="updateLabel">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="description-label">
            <p>Description:</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{color: "black"}}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <select
            value={category}
            name="cateory"
            id="category-dropdown"
            onChange={(e) => setCategory(e.target.value)}
          >
            <p>Category</p>
            <option value="">Select a Category</option>
            <option value="mens">Mens</option>
            <option value="womens">Womens</option>
            <option value="shoes">Shoes</option>
          </select>
          <label>
            Image:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <button type="submit">Update Item</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default UpdateItemModal;
