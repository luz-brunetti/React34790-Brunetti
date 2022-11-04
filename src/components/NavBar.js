import React from "react";
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
        <nav id="nav">
            <NavLink to="/"><img className="logo" alt="Logo Hana Flower Shop" src="https://i.pinimg.com/originals/e9/d3/5b/e9d35b1793dfd860e7a05cc8633719f9.jpg"></img></NavLink>
            <NavLink className="nav__link link" to="/productos">PRODUCTOS</NavLink>
            <NavLink className="nav__link link" to="/productos/ramos">RAMOS</NavLink>
            <NavLink className="nav__link link" to="/productos/hogar">PARA EL HOGAR</NavLink>
        <CartWidget/>
        </nav>
        </>
    )
}

export default NavBar;