const PropsPassing = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      {/*Recieving an Object ============================== */}
      <ul>
        <li>firstName:{props.personsDetails["firstName"]} </li>
        <li>lastName:{props.personsDetails["lastName"]}</li>
        <li>
          Hobby:{props.personsDetails.hobbies[1]},{" "}
          {props.personsDetails.hobbies[0]}
        </li>
        <li>Hobby:{props.personsDetails.hobbies[2]}</li>
        {/* Call the introduce method */}
        {/* <button onClick={props.personsDetails2()}>Introduce</button> */}
        {/* Button check function check */}
        <button onClick={props.BtnCheck}>Checking</button>
        <li></li>
      </ul>
    </div>
  );
};

export default PropsPassing;
