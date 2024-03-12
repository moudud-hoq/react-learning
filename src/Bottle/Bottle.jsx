import "./bottleStyle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { model, brand, price } = bottle;
  return (
    <div className="bottleStyle">
      <p>
        <b>Bottle</b>:{model}
      </p>
      <p>
        <b>Price</b>:{price}
      </p>
      <p>
        <b>Price</b>:{brand}
      </p>
      {/* 0.0 Cart */}
      <button onClick={() => handleAddToCart(bottle)} className="PurBtn">
        Purchase
      </button>
    </div>
  );
};

export default Bottle;
