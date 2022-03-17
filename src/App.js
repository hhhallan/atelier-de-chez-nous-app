import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Recipe from "./pages/Recipe";
import Cart from "./pages/Cart";
import Profil from "./pages/Profil";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/recipes" element={<Recipe/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Products/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
