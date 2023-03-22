import React from 'react'
import '../stylesheets/productpage.css'
import { useParams } from 'react-router-dom';

export function ProductPage({items}) {
    const { id } = useParams();
    for(let i = 0; i < items.length; i++){
        if(items[i].id == id){
            return(
                <div className = "productPage"  >
                    <section className = "product">
                        <div className='containerLeft'>
                            <img src={items[i].image} className="specificProductImg" alt={items[i].title} />
                            <button className = "productButton">
                                Update Item
                            </button>
                        </div>
                        <div className = "product description">
                            <h1 className = "productTitle">{items[i].title}</h1>
                            <h2 className = "productPrice">${items[i].price}</h2>
                            <div className ="productSpecs" >
                                <p> <span>Product Description :</span>lorem ipsum blah asdbasud uahsdu </p>
                            </div>
                            <div className = "CartButtons">
                                <button className = "buttons">Add to Cart</button>
                                <button className = "buttons">View Cart</button>
                            </div>
                        </div>
                    </section>
                </div>
        )}
    }
    // return (
    //     <div className = "ProductPage"  >
    //         <section className = "product">
    //             <img src="" alt="productimage" />
    //             <div className = "product description">
    //                 <h1 className = "product Title">Product Title</h1>
    //                 <h2 className = "product Price">$XX.XX</h2>
    //                 <div className ="productSpecs" >
    //                     <p> Product Description with specs and details</p>
    //                 </div>
    //                 <div className = "CartButtons">
    //                     <button className = "buttons">Add to Cart</button>
    //                     <button className = "buttons">View Cart</button>
    //                 </div>
    //             </div>
    //         </section>
    //         <section className = "Update button">
    //             <button className = "button">
    //                 Update Item
    //             </button>
    //         </section>
    //     </div>
    // )
}