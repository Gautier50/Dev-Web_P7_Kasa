import React from "react";
import "../Banner/Banner.css";
import BannerImg from "../.././assets/images/home_banner_img_desktop.jpg";

export default function Banner() {
  return (
    <div className="Banner">
      
        <img
          className="banner_fig_img"
          src={BannerImg}
          alt="banniere page d'accueil"
        />
      
      <div className="Banner_text">
        <h1 className="Banner_text_p">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}
