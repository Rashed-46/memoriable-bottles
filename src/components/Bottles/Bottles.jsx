import React, { useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./Bottles.css";
import { addToLs } from "../../utilities/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // to store cart value
  useEffect(() => {}, [bottles]);
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
  };

  return (
    <div>
      <h2>Memoriable bottle with react</h2>
      <h3>Bottle Available:{bottles.length} </h3>
      <h3>Cart: {cart.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
