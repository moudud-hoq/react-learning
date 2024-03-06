const ParentPropsPassing = () => {
  return (
    <div>
      {/* 1. 4 type of function we can use
        2.Direct use
        3.Arrow FUnction
        4. Regular Function
        5. We can use function inside or outside
         */}
      <button
        onClick={() => {
          alert("Click"); 
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ParentPropsPassing;
