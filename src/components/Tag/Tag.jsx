import React from 'react';
import "../Tag/tag.css"

const Tag = ({ getTag }) => {
  return (
    <div>
      <div className="tag">
        <p className="tag_text">{getTag}</p>
      </div>
    </div>
  );
};

export default Tag;