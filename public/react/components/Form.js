import React, { useState } from 'react';

function ProductForm() {
    const [inputs, setInputs] = useState({});

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

    return (
        <div className= "newProductForm">
            <div>
                <h1>Add Your Product!</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <label>Title:
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
            />
            </label>
            <label>Price:
            <input
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
            />
            </label>
            <label>Description:
            <textarea
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
            />
            </label>
            <label>Category:
            <input
                type="text"
                name="category"
                value={catergory}
                onChange={handleChange}
            />
            </label>
            <label>Image:
            <input
                type=""
                name="image"
                value={image}
                onChange={handleChange}
            />
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;

