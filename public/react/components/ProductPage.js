import React from 'react'
import '../stylesheets/productpage.css'
import { useParams, useState } from 'react-router-dom';

export function ProductPage({items, addToCart}) {


    const { id } = useParams();
    for(let i = 0; i < items.length; i++){
        if(items[i].id == id){
            return(
                <div className = "productPage"  >
                    <section className = "singularProduct">
                        <div className='containerLeft'>
                            <img src={items[i].image} className="specificProductImg" alt={items[i].title} />
                            <button className = "productButton">
                                Update Item
                            </button>
                        </div>
                        <div className = "productDescription">
                            <h1 className = "productTitle">{items[i].title}</h1>
                            <h2 className = "productPrice">${items[i].price}</h2>
                            <div className ="productSpecs" >
                                <p> <span>Product Description :</span>lorem ipsum blah asdbasud uahsdu </p>
                            </div>
                            <div className = "CartButtons">
                                <button 
                                    onClick={() => addToCart(items[i].id)}
                                className = "buttons">Add to Cart</button>
                                <button className = "buttons">View Cart</button>
                            </div>
                        </div>
                    </section>
                </div>
        )}
    }
}
