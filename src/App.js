import React from "react";
import NavBar from "./components/NavBar.js";
import Main from "./Main";
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom";



function App(){
    return (
        <BrowserRouter>
            <NavBar/>
            <Main/>
            <Footer/>
        </BrowserRouter>

    );
}

export default App;