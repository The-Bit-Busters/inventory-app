import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';
import { ProductPage } from './Productpage';

export function HomePage(props){
    return (
    <div className= "homepage">
        <section className="greeting">
            <h1 id='home-title'>The Bit Buckets Inventory!</h1>
				<h2>All things 🔥</h2>
        </section>
        <section className="features-section">
            <h2 id='featured-title'>Featured Products</h2>
            <ul className='featured-parent'>
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
            <h2 id='featured-title'>Products</h2>

            <ul className='featured-parent'>
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
        <section  className="button-section">
            <Link to='/shopall' style={{ textDecoration: 'none' }}>
                <button className="shopall-button">All Items</button>
            </Link>
        </section>
        <ProductPage/>
    </div>
    )
}
