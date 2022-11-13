import React from 'react';
import { Link } from "react-router-dom";

const Item = ({nombre, precio, foto, id}) => {

    return(
        <article className="product__card card">
            <h1 className="card__title">{nombre} </h1>
            <img src={foto} alt={nombre} className="card__img"/>
            <h2 className="card__description">${precio}</h2>
            {/* <button className="card__button">ver mas</button> */}
            <Link to={`../item/${id}`} >
                <button className="card__button">ver mas</button>
            </Link>
        </article>
    ) 
    
}

export default Item

