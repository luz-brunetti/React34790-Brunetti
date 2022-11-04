import React from "react";
import Item from "./Item";

const ItemList = ({listProducts}) => { 
    
    return(
        <>
        <section className="products"> 
        {listProducts.map((prod,i) => <Item key={prod.id}  product = {prod}/>)}
        </section>
        </>
    
    ) 
    
}

export default ItemList