import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/" className="shop">
                    Shop
                </Link>
                <Link to="/cart" className="cart">
                    <FaShoppingCart size={26} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
