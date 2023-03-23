import React, { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const item = await response.json();
      console.log("Item created:", item);
    } else {
      console.error("Failed to create item:", response);
    }
  };

  return (
    <div className="newProductForm">
      <div>
        <h1>Add Your Product!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <select
            value={inputs.category || ""}
            name="cateory"
            id="category-dropdown"
            onChange={handleChange}
          >
            <option value="">-- Select a Category --</option>
            <option value="mens">Mens</option>
            <option value="womens">Womens</option>
            <option value="shoes">Shoes</option>
          </select>
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
