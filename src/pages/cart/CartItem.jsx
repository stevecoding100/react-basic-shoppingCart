import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import "./Cart.css";
function CartItem(props) {
    const { id, title, price, productImg } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);
    return (
        <div className="cartItem__container">
            <img src={productImg} alt="products" />
            <div className="cart__description">
                <p>
                    <b>{title}</b>
                </p>
                <p>${price}</p>
                <div className="cart__count">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input
                        type="text"
                        value={cartItems[id]}
                        name="amount"
                        id="amount"
                        onChange={(e) =>
                            updateCartItemCount(Number(e.target.value), id)
                        }
                    />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
            {/* <button className="remove__btn">Remove</button> */}
        </div>
    );
}

export default CartItem;
