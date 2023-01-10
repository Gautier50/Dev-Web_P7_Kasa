import React from "react";
import "../Collapse/Collapse.css";

export default function Collapse2({ description, equipments }) {
  return (
    <div className="logement_wrapper">
      <div id="logement_info">
        <details className="logement_info_details">
          <summary className="logement_info_title">
            Description <i className="fas fa-chevron-down"></i>
          </summary>
          <p className="logement_info_text">{description}</p>
        </details>
      </div>
    
      <div id="logement_info">
        <details className="logement_info_details">
          <summary className="logement_info_title">
            Équipements <i className="fas fa-chevron-down"></i>
          </summary>
          <ul className="logement_info_text">
          {equipments.map ((equipment) => {
            return <li key = {`${equipment}`}>{equipment}</li>
          })}
          </ul>
        </details>
      </div>
      </div>
  );
}
