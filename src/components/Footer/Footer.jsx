import React from "react";
import logo_footer from "../.././assets/images/logo_footer.svg"
import "../Footer/Footer.module.scss"

export default function Footer() {
  return (
    
      <div className="black_footer">
        <figure className="black_footer_fig">
          <img src={logo_footer} alt="logo de l'agence kasa" />
        </figure>
        <div className="black_footer_text">
          <p className="black_footer_text_p">2022 Kasa. All rights reserved</p>
        </div>
      </div>
    
  );
}
