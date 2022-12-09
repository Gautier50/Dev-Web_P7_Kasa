import React from "react";
import "../Banner/Banner.scss";
import BannerImg from "../.././assets/images/img_background.jpg";

export default function Banner() {
  return (
    <div className="Banner">
      <figure className="Banner_fig">
        <img
          className="banner_fig_img"
          src={BannerImg}
          alt="banniere page d'accueil"
        />
      </figure>
      <div className="Banner_text">
        <p className="Banner_text_p">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}
