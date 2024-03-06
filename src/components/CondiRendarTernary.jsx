const CondiRendarTernary = () => {
  //   let marks = 100;
  //   let marks = 10;
  //=================================================
  //   let status = true;
  //=================================================
  //   let status = true; //Logical &&
  //=================================================
  let status = true;
  //=================================================
  //
  return (
    <div>
      {/* Ternary Operator */}
      {/* {marks > 80 ? <h1>Brilliant Result</h1> : <h1>Avarage Result</h1>} */}
      {/* {status ? <button>Logout</button> : <button>LogIn</button>} */}
      {/*Logical &&  ====================================================== */}
      {/* {status && <button>Logout</button>} */}
      {/*Immediately Invoked FUnction  ====================================================== */}
      {(() => {
        if (status == true) {
          return <button>Logout</button>;
        } else {
          return <button>LogIn</button>;
        }
      })()}
    </div>
  );
};

export default CondiRendarTernary;
