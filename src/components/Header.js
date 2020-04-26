import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'


const Header = () => (
    <header>
        <h1>Portifolio</h1>
        <NavLink to="/" activeClassName="selected" exact={true}>Home</NavLink>
        <NavLink to="/portifolio" activeClassName="selected" >Portifolio</NavLink>
        <NavLink to="/contact" activeClassName="selected" >Contact</NavLink>
    </header>
);

 export default Header;