import React from "react";
import Logo from "../../../src/assets/images/logo_header.svg";
import "../Header/Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <figure className="white_header_fig">
        <Link to="/" className="logo_link">
          <img
            className="logo"
            src={Logo}
            alt=" logo de l'agence de location"
          />
        </Link>
      </figure>
      <div className="navbar_container">
        <nav className="navbar">
          <Link to="/" className="navbar_link">
            Accueil
          </Link>
          <Link to="/About" className="navbar_link">
            À propos
          </Link>
        </nav>
      </div>
    </div>
  );
}
