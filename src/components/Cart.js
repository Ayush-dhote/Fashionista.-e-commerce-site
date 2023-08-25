import React, { useContext } from 'react'
import Navbar from './Navbar'
import '../cart.css'
import { Products } from './Products'
import { productContext } from './Context'
import CartItems from './CartItems'
import Footer from './Footer'

const Cart = () => {
  const log=document.getElementsByClassName('islog')
  const {cartItems,subTotal}=useContext(productContext)
  let location=window.location.pathname
  // console.log(log);
  if(location==='/cart' && log.length>0){
      log[0].style.display='none'
  }
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
        <div className='checkOut'>
          <div className='subTotal'>
              <h4>Subtotal : ₹ {subTotal()} </h4>
          </div>
          <button className='btn'>Checkout</button>
        </div>
     </div>
    <Footer/>
    </div>
  )
}

export default Cart