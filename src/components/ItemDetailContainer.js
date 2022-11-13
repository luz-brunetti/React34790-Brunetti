import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getDetailsById } from './CustomFetch';


const ItemDetailContainer = () => {
    
    const [product,setListProducts]  = useState([])

    const {id} = useParams()

    useEffect(()=>{
        
        setListProducts({})

        getDetailsById(id)
            .then(res=> {
                setListProducts(res)
        })

    },[id])

    return (
        <div className='contenedor-detail'>
        {product?.length === 0 ? <h1 className='loading'>Cargando...</h1> : <ItemDetail {...product}/>}
        </div>
    );
}


export default ItemDetailContainer

