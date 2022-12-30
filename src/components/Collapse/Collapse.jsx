import React, { useState } from "react";
import "../Collapse/Collapse.css";


const Collapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return isOpen ? (
    <div className="dropdown_logement_page_close">
      <i className="fas fa-chevron-up" onClick={() => setIsOpen(false)}></i>
    </div>
  ) : (
    <div className="dropdown_logement_page_open">
      <i className="fas fa-chevron-down" onClick={() => setIsOpen(true)}></i>
     
    </div>
  );
};

export default Collapse;
