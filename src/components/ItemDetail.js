
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({nombre, precio, foto, description}) => {

    
    return (
        <>
        <div className="card__container">
            <div className='card__description'>
            <img src={foto} alt={nombre} className="description__img" />
            <div className="detail__container">
            <h2 className='detail-title'>{nombre} {precio}</h2>
            <p>{description}</p>
            <ItemCount/>
            </div>
            </div>
            </div>
        </>
    );
}
export default ItemDetail

