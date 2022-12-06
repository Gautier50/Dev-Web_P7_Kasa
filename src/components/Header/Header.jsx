import React from 'react';
import Logo from "../.././assets/images/LOGO.jpg";
import './Header.module.scss';
import '../Navbar/Navbar';

const Header = () => {
    return (
      <Header>
        <img className="logo" src={Logo} alt="Logo agence Kasa"/>
      </Header>
    );
};

export default Header;