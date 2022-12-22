import React, { useState } from "react";
import "../Collapse/Collapse.css";

const Collapse = () => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="dropdown">
      <i className="fas fa-chevron-up" onClick={() => setIsOpen(false)}></i>

      <div></div>
      <div>
        <p className="fiability_infos">
          Les annonces postées sur Kasa granatissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes
        </p>
      </div>
    </div>
  ) : (
    <i className="fas fa-chevron-down" onClick={() => setIsOpen(true)}></i>
  );
};

export default Collapse;
