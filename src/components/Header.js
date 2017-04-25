import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import SearchBox from './SearchBox';

function Header(){
   return (
    <div id="header">
    <Navbar />
    <Logo />
    <SearchBox />
  </div>);
}

export default Header;