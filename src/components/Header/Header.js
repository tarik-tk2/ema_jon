import React from 'react';
import { NavLink } from 'react-router-dom';
import logo  from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
         
          <img src={logo} alt="" srcset="" />
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/review">Review</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
          </nav>
        </div>
    );
};

export default Header;