import React from "react";
import "./carts.css";

const Carts = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div>
            <img src={bottle.img} />
            <button onClick={() => handleRemoveCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
