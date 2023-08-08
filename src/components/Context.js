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

    const subTotal=()=>{
        let subTotal=0
        for(let item in cartItems){
            if(cartItems[item]>0){
                let total=Products.find((product)=> product.id === Number(item))
                subTotal += cartItems[item]*total.price
            }
        }
        return subTotal;
    }

    const contextValue={cartItems,addToCart,removeFromCart,subTotal}

    return <productContext.Provider value={contextValue}>{props.children}</productContext.Provider>
}