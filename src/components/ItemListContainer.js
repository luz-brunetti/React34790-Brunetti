import React from "react";

const ItemListContainer = (prop) => {
    
    let nombreCompleto = prop.nombre + " " +  prop.apellido

    return (
        <div id="list__container">
            <div>Bienvenida/o {nombreCompleto}.</div>
        </div>
    )
}

export default ItemListContainer;