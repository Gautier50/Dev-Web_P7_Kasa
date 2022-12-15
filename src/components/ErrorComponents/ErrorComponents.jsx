import React from "react";
import { Link } from "react-router-dom";
import "../ErrorComponents/ErrorComponents.module.scss";

export default function Error() {
  return (
    <div className="errorPage">
      <h1 className="error404">404</h1>
      <p className="errorMessage">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="errorLink">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}
