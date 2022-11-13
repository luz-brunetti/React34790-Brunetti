import React from "react";
import Item from "./Item";

const ItemList = ({listProducts}) => { 
    
    return(
        <section className="misProductos">
        {
            listProducts?.map(product => {
                return ( 
                    <Item key={product.id} {...product}/>
                )
            })
        }
    </section>
    ) 
    
}

export default ItemList

