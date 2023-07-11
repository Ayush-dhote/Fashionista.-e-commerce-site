import React,{useState,createContext} from "react"
import { Products } from "./Products"

export const productContext=createContext(null)

const defaultCartContent=()=>{
    let cart={}
    for(let i=1;i<Products.length+1;i++){
        cart[i]=0
    }
    return cart
}

export const ProductContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(defaultCartContent())

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }

    const contextValue={cartItems,addToCart,removeFromCart}

    return <productContext.Provider value={contextValue}>{props.children}</productContext.Provider>
}