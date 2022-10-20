import React from "react";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Footer from "./Footer"

function App(){
    return (
        <>
            <NavBar/>
            <ItemListContainer nombre="María Luz" apellido="Brunetti"/>
            <Footer/>
        </>

    );
}

export default App;