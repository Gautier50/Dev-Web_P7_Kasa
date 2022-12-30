import React from 'react';
import etoile_pleine from '../.././assets/images/etoile_pleine.svg'
import etoile_vide from "../.././assets/images/etoile_vide.svg";


const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={etoile_pleine}
            alt="etoile de couleur rouge"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={etoile_vide}
            alt="etoile de couleur grise"
          />
        )
      )}
    </div>
  );
};

export default Rating;