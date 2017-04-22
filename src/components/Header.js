import React from 'react';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

function Header(){
   return (
    <div id="header">
    <Navbar />
    I am the header
    <SearchBox />
  </div>);
}

export default Header;