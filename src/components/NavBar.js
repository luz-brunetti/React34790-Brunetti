import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
        <nav id="nav">
            <a href="#"><img className="logo" src="https://i.pinimg.com/originals/e9/d3/5b/e9d35b1793dfd860e7a05cc8633719f9.jpg"></img></a>
            <a href="#">HOME</a>
            <a href="#">RAMOS</a>
            <a href="#">PLANTAS DE HOGAR</a>
            <a href="#">FLORES INDIVIDUALES</a>
            <a href="#">EVENTOS</a>
            <a href="#">CONTACTO</a>
        <CartWidget/>
        </nav>
        </>
    )
}

export default NavBar;