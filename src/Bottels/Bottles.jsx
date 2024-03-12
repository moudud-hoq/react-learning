import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Botteles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]); //cart-01.02

  //   Do Load Data
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // Load Cart from local storage -lfls-01.00============
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();

      setCart(storedCart, bottles); // Update the cart state with the retrieved cart data
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);

        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  //Add event handler to set cart-01.00==============
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle]; //cart-01.03
    setCart(newCart); //cart-01.04
    addToLS(bottle.id); //LS-04
  };

  const handleRemoveFromCart = (id) => {
    //visual cart remove
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    //remove from LS
    removeFromLS(id);
  };

  return (
    <div>
      <h4>Bottles Available: {bottles.length}</h4>
      {/* <h6>Your Cart: {cart.length}</h6> ==Cart- 01.05 */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottlesStyle">
        {/* Do Map or Loop Through */}
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            //Cart 01.1
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Botteles;
