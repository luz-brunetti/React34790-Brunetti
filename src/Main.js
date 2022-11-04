import React from "react";
import Home from './Home';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes , Route } from "react-router-dom";
// import Carrito from "./Carrito";

const Main = () => {
    
    return (
        <main>
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:category"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main