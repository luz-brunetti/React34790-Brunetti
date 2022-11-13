import { products } from "./Products"

export const customFetch = () => {
    return new Promise((res) => {
        setTimeout(() =>{
            res(products)
        }, 2000)  
    })
}

export const getProductsByCategory= (cat) => {

    let getProductos = new Promise ((response) => {
        setTimeout(() =>{
            response(products.filter(product => product.category === cat))
        }, 2000)
    })
    return getProductos
}

export const getDetailsById = (id)=> {

    let showDetail = new Promise ((response) => {
        setTimeout(() =>{
            response(products.find(product => product.id === id))
        },2000)
    })
    return showDetail

}