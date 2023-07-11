import React from "react"
import Home from "./components/Home"
import Auth from "./components/Auth"
import Cart from "./components/Cart"
import Error from "./components/Error"
import Products from "./components/Products"
import { Routes,Route } from "react-router"
import { ProductContextProvider } from "./components/Context"

function ecom(){
  return <>
    <ProductContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </ProductContextProvider>
  </>
}

export default ecom