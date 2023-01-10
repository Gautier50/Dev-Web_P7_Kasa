import React from "react";
import "../About/About.css";
import Header from "../.././components/Header/Header";
import Footer from "../../components/Footer/Footer";
import about_background from "../.././assets/images/about_background.jpg";

export default function About() {
  return (
    <div>
      <Header />
      <div className="about_background">
        <img
          className="banner_about_background"
          src={about_background}
          alt="bannière page à propos"
        />
      </div>

      <div className="dropdown_aboutpage">
        <div id="about_info">
          <details className="about_info_details">
            <summary className="about_info_title">
              Fiabilité <i className="fas fa-chevron-down"></i>
            </summary>
            <p className="about_info_text">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </details>
        </div>

        <div id="about_info">
          <details className="about_info_details">
            <summary className="about_info_title">
              Respect <i className="fas fa-chevron-down"></i>
            </summary>
            <p className="about_info_text">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </details>
        </div>

        <div id="about_info">
          <details className="about_info_details">
            <summary className="about_info_title">
              Service <i className="fas fa-chevron-down"></i>
            </summary>
            <p className="about_info_text">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </details>
        </div>

        <div id="about_info">
          <details className="about_info_details">
            <summary className="about_info_title">
              Sécurité <i className="fas fa-chevron-down"></i>
            </summary>
            <p className="about_info_text">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </div>
  );
}
