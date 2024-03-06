const Loop = () => {
  const city = ["Dhaka", "Rangpur", "DInajpur", "Barishal"];
  const looping = [
    "map",
    "filter",
    "foEach",
    "reduce",
    "for loop",
    "while loop",
  ];

  const forLoop = ["One", "Two", "Three"];
  const forLoopItems = [];
  for (let i = 0; i < forLoop.length; i++) {
    forLoopItems.push(<li key={i}>{forLoop[i]}</li>);
  }

  return (
    <div>
      <ul>
        {city.map((item, index) => {
          return <li key={index.toString}>{item}</li>;
        })}
      </ul>
      <ol  >
        <h4>Why we use .map method instead of following items:</h4>
        {looping.map((item2, index2) => {
          return <ol key={index2.toString}>{item2}</ol>;
        })}
      </ol>
      <ol>{forLoopItems}</ol>
    </div>
  );
};

export default Loop;
