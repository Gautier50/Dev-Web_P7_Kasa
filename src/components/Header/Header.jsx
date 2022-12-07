import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../../src/assets/images/logo_header.jpg'
import '../Header/Header.module.scss'

export default function Header() {
  return (
    <Header>
      <img className="logo_header" src={logo_header} alt=" logo Kasa" />
      <Navbar/>
    </Header>
  );
}
