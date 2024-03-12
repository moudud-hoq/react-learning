//LS-01
const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

//LS-03
const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart); // Fix variable name
  localStorage.setItem("cart", cartStringified);
};

//LS-02
const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // Save to local storage
  saveCartToLS(cart); // Fix function call
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  // Remove the specific id from the cart array
  const remaining = cart.filter((storedId) => storedId !== id);
  saveCartToLS(remaining); // Save the updated cart to local storage
};

export { addToLS, getStoredCart, removeFromLS }; // Export saveCartToLS function
