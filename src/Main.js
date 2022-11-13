import React from "react";
// import Home from './Home';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
// import Carrito from "./Carrito";

const Main = () => {
    
    return (
        <main>
            <Routes>

                <Route path='/' element={<ItemListContainer/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:category"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main