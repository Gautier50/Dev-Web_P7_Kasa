import React from "react";
import "../About/About.css";
import Header from "../.././components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
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
        <div className="fiability">
          <h3 className="Title">Fiabilité</h3>
          <Collapse title="fiabilité"/>
          
          {/* <i className="fas fa-chevron-up"></i> */}
        </div>

        <div className="respect">
          <h3 className="Title">
            
            Respect
          </h3>
          <Collapse />
          <p className="respect_infos">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>

        <div className="service">
          <h3 className="Title">
            Service
          </h3>
          <Collapse />
          <p className="service_infos">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>

        <div className="security">
          <h3 className="Title">
            Sécurité
          </h3>
          <Collapse />
          <p className="security_infos">
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
