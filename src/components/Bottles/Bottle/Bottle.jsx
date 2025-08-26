import React from "react";
import "./bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, stock } = bottle;

  return (
    <div className="bottle-container">
      <h3>Bottle:{name} </h3>
      <img src={img} alt="" />
      <h4>Stock: {stock}</h4>
      <h4>price: ${price}</h4>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
