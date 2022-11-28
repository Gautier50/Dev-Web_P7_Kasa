import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <div className="navigation">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>à propos</li>
        </NavLink>
        <NavLink to="/Location">
          <li>Location</li>
        </NavLink>
        <NavLink to="*">
          <li>Error</li>
        </NavLink>
      </div>
    );
};

export default Navigation;