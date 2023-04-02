import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import "./Shop.css";

function Product(props) {
    const { id, title, price, productImg } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartAmount = cartItems[id];

    return (
        <div className="product__container">
            <div className="description">
                <img src={productImg} alt="product" />
                <p>
                    <b>{title}</b>
                </p>
                <p>${price}</p>
                <button className="addToCartBtn" onClick={() => addToCart(id)}>
                    Add to cart {cartAmount > 0 && <>({cartAmount})</>}
                </button>
            </div>
        </div>
    );
}

export default Product;
