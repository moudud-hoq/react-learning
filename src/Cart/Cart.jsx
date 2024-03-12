import PropTypes from "prop-types";

import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h6>Your Cart: {cart.length}</h6>
      <div className="cart-container">
        {/* Use cart.map instead of Cart */}
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.image} alt={bottle.id} />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
