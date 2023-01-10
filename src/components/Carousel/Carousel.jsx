import React, { useState } from 'react'
import "./carousel.css";

export default function Carousel({pictures}) {

const [logmtPict, setlogmtPict] = useState(0);

// image suivante
const nextPicture = () => {
  setlogmtPict(logmtPict === pictures.length - 1 ? 0 : logmtPict + 1);
};

// image précédente
const previousPicture = () => {
  setlogmtPict(logmtPict === 0 ? pictures.length - 1 : logmtPict - 1);
};

  return (
    <section id="carouselSlider">
      {/* Création des flèches de défilement des images */}
      {pictures.length > 1 && (
        <i className="fas fa-chevron-left" onClick={previousPicture}></i>
      )}
      {pictures.length > 1 && (
        <i className="fas fa-chevron-right" onClick={nextPicture}></i>
      )}

      {/* Récupération des images du Carousel */}
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === logmtPict && (
              <img
                src={img}
                alt="photos de la location"
                className="carousel_img"
              />
            )}
            {index === logmtPict && (
              <span className="carousel_img_number">
                {logmtPict + 1}/{pictures.length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}