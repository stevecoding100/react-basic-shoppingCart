import React, { useContext } from "react";
import { Products } from "../../products";
import { ShopContext } from "../../context/ShopProvider";
import CartItem from "./CartItem";
import "./Cart.css";

import { useNavigate } from "react-router-dom";

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart__container">
            <div className="cart__title">
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart__items">
                {Products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            <div className="checkout">
                <p>
                    Subtotal: <span>${totalAmount}</span>
                </p>
                <div className="checkout__btn">
                    <button onClick={() => navigate("/")}>
                        Continue Shopping
                    </button>
                    <button>Checkout</button>
                </div>

                <h1>Your Cart is Empty</h1>
            </div>
        </div>
    );
}

export default Cart;
