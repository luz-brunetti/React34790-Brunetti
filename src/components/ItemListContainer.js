import React from "react";
import ItemList from "./ItemList";
import {useEffect,useState} from 'react'
import { customFetch } from "./CustomFetch";
import { products } from "./Products";


const ItemListContainer = () => {  
      
   const [listProducts,setListProducts]  = useState([])
   
   useEffect(() => {
       customFetch(products)
           .then(res => setListProducts(res))
   }, []) 


       return(
       <div> 
           <h1 className="title">PRODUCTOS</h1>  
       <div>
       </div>
               {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
               <ItemList listProducts={listProducts}/> 
        </div>
       )
   }
   
   export default ItemListContainer  

   