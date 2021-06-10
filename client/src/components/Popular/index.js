import React, { useCallback } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import data from "../../pages/data";
function Popular() {

    return ( 
        <div className="popular">
            <h2>Most Popular</h2>
            <div className="popular-container">

                {data.products.map((product) => (
                <div className="card"key={product._id}>

                    <img className="product-img"src={product.image} alt={product.name}/>
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>

                </div>
                ))}
            </div>
        </div>
    );
}

export default Popular;
