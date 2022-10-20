import React from "react";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartWidget = () =>{
    return (
        
        <a href="#" id="carrito">
            <LocalMallIcon fontSize="large"/>
            <div id="carrito_items">0</div>
        </a>
    )
}

export default CartWidget;