import React, { useContext } from 'react'
import { productContext } from './Context'

const CartItems = (props) => {
    const {id,productName,price,productImage,description}=props.data
    const {cartItems,addToCart,removeFromCart}=useContext(productContext)
    const quantity=cartItems[id]
  return (
    <>
    <div id='items' className='items'>
        <div className='detail'>
            <div className='image'><img src={productImage} alt="" /></div>
            <div className='pn'>
                <h4>{productName}</h4>
                <h6>{description}</h6>
            </div>
        </div>
        <div className='quantity'>
            <button className='inc_denc' onClick={()=> removeFromCart(id)}>-</button>
            <input id='num' type="number" value={cartItems[id]} />
            <button className='inc_denc' onClick={()=> addToCart(id)}>+</button>
        </div>
        <div className='total'>
            <h4>₹ {quantity*price}</h4>
        </div>
    </div>
    </>
  )
}

export default CartItems