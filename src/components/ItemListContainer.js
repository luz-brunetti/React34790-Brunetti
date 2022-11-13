import React from "react";
import ItemList from "./ItemList";
import {useEffect,useState} from 'react'
import { customFetch, getProductsByCategory } from "./CustomFetch";
import {useParams} from 'react-router-dom'
import { products } from "./Products";
// import {getPorductsByCategory} from './CustomFetch';


const ItemListContainer = () => {  
      
   const [listProducts,setListProducts]  = useState([])

   const {category} = useParams()


    useEffect(() => {
        setListProducts([])

        if (category) {
            getProductsByCategory(category)
            .then (res => {setListProducts(res)})

        }else {
            customFetch()
                .then(resultado => {setListProducts(resultado)})

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

