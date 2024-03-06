const Practice = () => {
  return (
    <div>
      <h1 className=" ">2</h1>
      <button onClick={() => "Hello"}>Submit</button>
      <h5>
        Day:{new Date().getDate()} Month:{new Date().getDay()} Year:
        {new Date().getFullYear()}
      </h5>
      <h5>
        Recent Time- Hour:{new Date().getHours()} Minutes:
        {new Date().getMinutes()} Second:{new Date().getSeconds()}
      </h5>
      {/* Css */}
      <p 
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        Styles
      </p>
    </div>
  );
};

export default Practice;
