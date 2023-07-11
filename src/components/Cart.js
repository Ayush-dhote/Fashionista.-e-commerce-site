import React, { useContext } from 'react'
import Navbar from './Navbar'
import '../cart.css'
import { Products } from './Products'
import { productContext } from './Context'
import CartItems from './CartItems'

const Cart = () => {
  const {cartItems}=useContext(productContext)
  return (
    <div>
     <Navbar/>
     <div className='title'><h1>Your Cart Items.</h1></div>
     <div className='cart'>
        {Products.map((elements)=>{
          if(cartItems[elements.id] !== 0){
            return <CartItems key={elements.id} data={elements}/>
          }
        })}
     </div>
    </div>
  )
}

export default Cart