import React, { useState } from "react";
import "../Collapse/Collapse.css";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse">
      <div className="title_and_arrow">
        <i className="fas fa-chevron-up" onClick={() => setIsOpen(true)}></i>
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="title_and_arrow">
        {props.title}
        <i className="fas fa-chevron-down" onClick={() => setIsOpen(false)}></i>
      </div>
      <p className="text">{props.content}</p>
    </div>
  );
};

export default Collapse;
