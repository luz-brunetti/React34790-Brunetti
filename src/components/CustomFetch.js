import { products } from "./Products"

export const customFetch = (products) => {
    return new Promise((res) => {
        setTimeout(() =>{
            res(products)
        }, 2000)  
    })
}

export const getProductsByCategory= (id) => {

    let getProductos = new Promise ((response) => {
        setTimeout(() =>{
            response(products.filter(item=>item.category === id))
        }, 2000)
    })
    return getProductos
}

export const getDetailsById = (productid)=> {

    let showDetail = new Promise ((response) => {
        setTimeout(() =>{
            response(products.find(item=>item.id === productid))
        },2000)
    })
    return showDetail

}