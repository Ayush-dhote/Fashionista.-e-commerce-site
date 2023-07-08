import React from "react"
import Home from "./components/Home"
import Auth from "./components/Auth"
import Cart from "./components/Cart"
import { Routes,Route } from "react-router"

function ecom(){
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </>
}

export default ecom