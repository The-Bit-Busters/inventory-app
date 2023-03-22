import React from 'react'
import './ProductPage.css'

export function ProductPage() {
    return (
        <div className = "ProductPage">
            <section classname = "product">
                <img src="" alt="productImage"/>
                <div className = "productDescription">
                    <h1 className = "productTitle">Product Title</h1>
                    <h2 className = "productPrice">$XX.XX</h2>
                    <div className ="productSpecs">
                        <p> Product Description with specs and details</p>
                    </div>
                    <div className = "CartButtons">
                        <button className = "buttons">Add to Cart</button>
                        <button className = "buttons">View Cart</button>
                    </div>
                </div>
            </section>
            <section classname = "Update button">
                <button className = "button">
                    Update Item
                </button>
            </section>
        </div>
    )
}