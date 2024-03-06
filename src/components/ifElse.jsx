const JsOne = () => {
  let marks = 60;

  return (
    <div>
      {(() => {
        if (marks >= 80 && marks < 100) {
          return <h1>A</h1>;
        } else if (marks >= 70 && marks < 80) {
          return <h1>A</h1>;
        } else if (marks >= 60 && marks < 70) {
          return <h1>A</h1>;
        } else {
          return <h2>F</h2>;
        }
      })()}
    </div>
  );
};

export default JsOne;
