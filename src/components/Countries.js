import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  const [data, setdata] = useState([]);
  const [rangValue, setrangValue] = useState(36);
  const [selectedRadio, setselectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setdata(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangValue}
          onChange={(e) => setrangValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setselectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setselectedRadio("")}>
          Annuler La Recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangValue)
          .map((country, index) => (
            <Cards key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
