import React from 'react'

const ShopAll = () => {
  return (
    <div>
        <section className="features-section">
            <h2 id='featured-title'>Men's Clothing</h2>
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
            <h2 id='featured-title'>Women's Clothing</h2>

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
        <section className="products-section">
            <h2 id='featured-title'>Technology</h2>

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
    </div>
  )
}

export default ShopAll