import React from "react";
import "../Collapse/Collapse.scss";
import Header from "../.././components/Header/Header";
import Footer from "../Footer/Footer";
import about_background from "../.././assets/images/about_background.jpg";

export default function Collapse() {
  return (
    <div>
      <Header />
      <div className="about_background">
        <img
          className="banner_about_background"
          src={about_background}
          alt="bannière page à propos"
        />

        <div className="fiability">
          <h3>
            Fiabilité<i class="fas fa-chevron-down"></i>
            <i class="fas fa-chevron-up"></i>
          </h3>

          <p>
            Les annonces postées sur Kasa granatissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes
          </p>
        </div>
        <div className="respect">
          <h3>Respect</h3>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
        <div className="service">
          <h3>Service</h3>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
        <div className="security">
          <h3>Sécurité</h3>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
