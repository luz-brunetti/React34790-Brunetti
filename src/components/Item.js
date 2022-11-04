import React from 'react';
import { Link } from "react-router-dom";

const Item = ({product}) => {

    return(
        <article className="product__card card">
            <h1 className="card__title">{product.nombre} </h1>
            <img src={product.foto} alt={product.nombre} className="card__img"/>
            <h2 className="card__description">${product.precio}</h2>
            {/* <button className="card__button">ver mas</button> */}
            <Link to={`/item/${product.id}`} >
                <button className="card__button">ver mas</button>
            </Link>
        </article>
    ) 
    
}

export default Item

