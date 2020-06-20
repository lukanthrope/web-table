import React from 'react';
import './style.css';

const Header: React.FC = (props) => 
  <header>
    { props?.children }
  </header>

export default Header;