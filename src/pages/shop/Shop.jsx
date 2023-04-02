import React from "react";
import { Products } from "../../products";
import Product from "./Product";
import "./Shop.css";
function Shop() {
    return (
        <div className="shop__container">
            <div className="shop__title">
                <h1>SteveStyle Shop</h1>
            </div>
            <div className="data__container">
                {Products.map((item) => (
                    <Product data={item} />
                ))}
            </div>
        </div>
    );
}

export default Shop;
