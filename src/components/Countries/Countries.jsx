import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []); // Add an empty dependency array

  const handleVisitedCountry = (country) => {
    console.log("Add this to your visited countries");
    // console.log(country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlags = (flag) => {
    console.log("Flag Adding");
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };

  // Remove item from an array in a state
  //use Filter to select all the elements except the one u want to added

  return (
    <div>
      <h3>Country Travel Site Ok</h3>

      {/* Visited Flag */}
      <div>
        {/* Visited Country */}
        <h3>Visited Country:{visitedCountries.length}</h3>
        <div className="flag-container">
          {visitedFlags.map((flag, idx) => (
            <img key={idx} src={flag}></img>
          ))}
        </div>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="parentDiv">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            countryProps={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
