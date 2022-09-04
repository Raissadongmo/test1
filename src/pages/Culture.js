import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import "../styles/components/_culture.scss";

const Culture = () => {
  const pays = [
    "Cameroun",
    "France",
    "Nigeria",
    "Algerie",
    "Congo",
    "bresil",
    "allemagne",
    "italie",
    "gabon",
    "ethiopie",
    "canada",
    "espagne",
    "alger",
    "niger",
    "mexique",
  ];
  return (
    <div>
      <Logo />
      <Navigation />
      <h1 className="texte">Decouvrez les cultures des pays du monde</h1>
      <h2 className="bienve">Bienvenue en/au :</h2>
      <br />
      <ul className="pays">
        {pays.map((land) => (
          <li className="site">{land}</li>
        ))}
      </ul>
    </div>
  );
};

export default Culture;
