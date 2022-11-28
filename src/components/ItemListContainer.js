import React from "react";
import { collection, getDocs, query, where  } from "firebase/firestore";
import {useEffect,useState} from 'react'
import { db } from "../Firebase";
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList";


const ItemListContainer = () => {  
      
   const [listProducts,setListProducts]  = useState([])

   const {category} = useParams()


    useEffect(() => {
        setListProducts([])

        const productsCollection = collection (db, "productos")

        if (category) {
            const filtro = query(productsCollection, where("category", "==", category))
            const consulta = getDocs(filtro)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setListProducts(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

            } else {
                const consulta = getDocs(productsCollection)
                consulta
                    .then((resultado) => {
                        const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                        setListProducts(productos)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
    
            }
    },[category])

       return(
        <div className='contenedor'>
            <h1 className="title">Productos</h1>
            {listProducts.length == 0 ? <h3 className="loading">Cargando...</h3> : <ItemList listProducts={listProducts} />}
        </div>
       )
   }
   
   export default ItemListContainer  

