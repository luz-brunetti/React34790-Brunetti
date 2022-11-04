import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getDetailsById } from './CustomFetch';


const ItemDetailContainer = () => {
    
    const [prod, setItem] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        
        setItem({})

        getDetailsById(id)
            .then(res=> {
                setItem(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[id])

    return (
        <div className='contenedor-detail'>
            {prod.length == 0 ? <p>Cargando...</p> : <ItemDetail key={prod.id} item={prod} /> }
        </div>
    );
}


export default ItemDetailContainer

