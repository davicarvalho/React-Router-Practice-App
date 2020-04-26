import React from 'react'
import { NavLink } from 'react-router-dom'

const Portifolio = () => (
    <div>
       <h1>I see a red door and I want it painted black</h1>
       <NavLink to="thingsIveDone/1">This is thing one</NavLink> <br />
       <NavLink to="thingsIveDone/2">This is thing two</NavLink>
    </div>
);

 export default Portifolio;