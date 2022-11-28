import React from "react";
import {db} from '../Firebase';
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        const productsCollection = collection(db, "productos")
        const refe = doc(productsCollection,id) 
        const consulta = getDoc(refe)

        consulta
        .then(res=>{
            setProduct(res.data())
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div className='contenedor-detail'>
        {product?.length === 0 ? <h1 className='loading'>Cargando...</h1> : <ItemDetail {...product}/>}
        </div>
    );
}


export default ItemDetailContainer

