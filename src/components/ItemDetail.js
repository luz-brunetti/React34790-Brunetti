
import React from "react";
import { products } from "./Products";
// import ItemCount from "./ItemCount";

const ItemDetail = (product) => {

    // const product = products()

    const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(product)
    }

    return (
        <div>
            <h2>{product.nombre} - ${product.precio}</h2>
            <div className="detail-flex">
                <img src={product.foto} alt={product.nombre} />
                <div>
                    {/* <p>{product.description}</p> */}
                    {/* <p>{product.description}</p> */}
                    {/* <ItemCount handleOnAdd={handleOnAdd}/> */}
                </div>
            </div>
        </div>
    )
}
export default ItemDetail

