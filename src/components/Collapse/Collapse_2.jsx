import React, { useState } from "react";
import "../Collapse/Collapse.css";
import chevron from "../../assets/images/chevron-down-solid.svg";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  console.log(props);

  return open ? (
    <div className="collapse">
      <div className="title">
        <p className="collapse_text">{props.title}</p>
        <button className="button_collapse">
          <img
            src={chevron}
            alt="chevron descendant"
            onClick={() => setOpen(true)}
          />
        </button>
      </div>
      <i className="fas fa-chevron-up" onClick={() => setOpen(false)}></i>
    </div>
  ) : (
    <div className="close_collapse">
      <div className="title_and_arrow">
        {props.title}
        <i className="fas fa-chevron-down" onClick={props.title}></i>
      </div>
      <p className="text">{props.content}</p>
    </div>
  );
};

export default Collapse;
