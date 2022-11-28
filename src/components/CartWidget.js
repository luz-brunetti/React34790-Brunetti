import React from "react";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from "react-router-dom";

const CartWidget = () =>{
    return (
        <Link to="./Carrito">
        <a href="#" id="carrito">
            <LocalMallIcon fontSize="large"/>
            <div id="carrito_items">0</div>
        </a>
           </Link>
    )
}

export default CartWidget;