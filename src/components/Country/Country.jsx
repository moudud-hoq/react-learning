import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetails/CountryDetail";

const Country = ({
  countryProps,
  handleVisitedCountry,
  handleVisitedFlags,
}) => {
  const { ccn3, name, flags, capital, continents, population } = countryProps;
  const [visited, setVisited] = useState(false);

  //When i will visit
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="mainDiv">
      <div className={`childDiv ${visited ? "visited" : "non-visited"}`}>
        <h4>ID: {ccn3}</h4>
        <h5>{name.common}</h5>
        <img className="img" src={flags.png} />
        <p>Capital:{capital}</p>
        <p>Continents:{continents}</p>
        <p>Population:{population}</p>

        <button onClick={() => handleVisitedCountry(countryProps)}>
          Mark As Visited
        </button>

        <button onClick={() => handleVisitedFlags(countryProps.flags.png)}>
          Add Flag
        </button>

        <button className="btn-visited" onClick={handleVisited}>
          {visited ? "Visited" : "Going"}
        </button>

        {/* Conditional Rendering */}
        {visited ? "I have visited the country" : "I want to visit"}
        <hr />
        <CountryDetail
          country={countryProps}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
        ></CountryDetail>
      </div>
    </div>
  );
};

export default Country;
