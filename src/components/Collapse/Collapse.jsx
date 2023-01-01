import React, { useState } from "react";
import "../Collapse/Collapse.css";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  return isOpen ? (
    <div className="dropdown_about_page_respect_close">
      <div className="title_and_arrow">Fiabilité
        <i className="fas fa-chevron-down" onClick={() => setIsOpen(false)}></i>
      </div>
    </div>
  ) : (
    <div className="dropdown_about_page_respect_open">
      <div className="title_and_arrow">
        <i className="fas fa-chevron-up" onClick={() => setIsOpen(true)}></i>
      </div>
    </div>
  );
};

export default Collapse;
