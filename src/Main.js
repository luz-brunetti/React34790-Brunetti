import React from "react";
// import Home from './Home';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { Route, Routes } from "react-router-dom";


const Main = () => {
    
    return (
        <main>
            <Routes>

                <Route path='/' element={<ItemListContainer/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:category"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/Carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
        </main>
    )
}

export default Main