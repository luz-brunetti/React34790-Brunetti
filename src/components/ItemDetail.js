
import React from "react";
// import ItemCount from "./ItemCount";

const ItemDetail = ({nombre, precio, foto}) => {
    return (
        <>
            <img src={foto} alt={nombre} className='img-detail' />
            <div className='contenedor-precio-titulo-detail'>
            <h2 className='detail-title'>{nombre} - ${precio}</h2>
            {/* <p>{detail}</p> */}
            {/* <ItemCount/> */}
            </div>
        </>
    );
}
export default ItemDetail

