import "./Watch.css";
const Watch = ({ watch }) => {
  const { model, price } = watch;

  return (
    <div className="watchDivStyle">
      <h2>
        <i>{model}</i>
      </h2>
      <h5>Price: {price}</h5>
    </div>
  );
};

export default Watch;
