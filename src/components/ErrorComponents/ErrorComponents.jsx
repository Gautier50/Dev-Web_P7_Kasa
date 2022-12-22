import React from "react";
import { Link } from "react-router-dom";
import "../ErrorComponents/ErrorComponents.css";
import Img404 from "../../assets/images/404.jpg"


export default function Error() {
  return (
    <div className="errorPage">
        <img className="imgerror" src={Img404} alt="404" />
      <p className="errorMessage">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <div className="errorLink">Retourner sur la page d'accueil</div>
      </Link>
    </div>
  );
}
