import React from 'react';

export function HomePage(props){
    return (
    <div className= "homepage container">
        <section class="Greeting">
            <h1>Action Quote</h1>
        </section>
        <section className="features-section">
            <h2>Featured Products</h2>
            <ul>
                <li className="featured products">
                    <img src="" alt=""/>
                    <h3>featured product 1</h3>
                </li>
                <li className="featured products">
                    <img src="" alt=""/>
                    <h3>Featured product 2</h3>
                </li>
                <li className="featured products">
                    <img src="" alt=""/>
                    <h3>featured product 3</h3>
                </li>
            </ul>
        </section>
        <section class="products-section">
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
    </div>
    )
}