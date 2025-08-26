import React, { useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./Bottles.css";
import {
  addToLs,
  getStoredCart,
  removeFromLs,
} from "../../utilities/localStorage";
import Carts from "../Carts/Carts";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // to store cart value to local store
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
      // stored cart give an array
      console.log("store cart", storedCart);

      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log("saved cart", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
  };
  // remove from local storage and ui/ux
  const handleRemoveCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLs(id);
  };

  return (
    <div>
      <h2>Memoriable bottle with react</h2>
      <h3>Bottle Available:{bottles.length} </h3>

      <div className="bottles-cart">
        <Carts cart={cart} handleRemoveCart={handleRemoveCart}></Carts>
      </div>

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
