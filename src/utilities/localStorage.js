const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else {
    return [];
  }
};

const saveTols = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const removeFromLs = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveTols(remaining);
};

const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveTols(cart);
};
export { addToLs, getStoredCart, removeFromLs };
