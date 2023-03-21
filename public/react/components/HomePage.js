import React from 'react';

export function HomePage(props){
    return (
    <div className= "homepage">
        <section className="Greeting">
            <h1>Action Quote</h1>
        </section>
        <section className="features-section">
            <h2>Featured Products</h2>
            <ul>
                <li className="featured product">
                    <img src="" alt=""/>
                    <h3>Featured product 1</h3>
                </li>
                <li className="featured product">
                    <img src="" alt=""/>
                    <h3>Featured product 2</h3>
                </li>
                <li className="featured product">
                    <img src="" alt=""/>
                    <h3>Featured product 3</h3>
                </li>
            </ul>
        </section>
        <section className="products-section">
            <ul>
                <li className="product">
                    <img src="" alt=""/>
                    <h3>Product 1</h3>
                </li>
                <li className="product">
                    <img src="" alt=""/>
                    <h3>Product 2</h3>
                </li>
                <li className="product">
                    <img src="" alt=""/>
                    <h3>Product 3</h3>
                </li>
            </ul>
        </section>
        <section className="button-section">
            <div>
                <button className="button">Button 1</button>
                <button className="button">Button 2</button>
            </div>
        </section>
    </div>
    )
}