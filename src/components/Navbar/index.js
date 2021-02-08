import React from 'react';
import { Nav, NavLink, NavIcon, Bars, Cart } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Nos Pizzas</NavLink>
        <NavLink to='/cart'><p>Cart</p>
          <Cart /></NavLink>
        {/* <NavIcon onClick={toggle}>
          <p>Cart</p>
          <Cart />
        </NavIcon> */}
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
