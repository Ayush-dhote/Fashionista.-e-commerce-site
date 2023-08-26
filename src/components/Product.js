import React from 'react'
import '../products.css'
import { useContext } from 'react'
import { productContext } from './Context'
import { Products } from './Products'

const Product = (props) => {
  const {id,productName,price,productImage,description}=props.data
  const {addToCart,cartItems}=useContext(productContext)
  const quantity=cartItems[id]
  // console.log(quantity);

  return (
    <div key={id} className='product'>
        <div className='img'>
        <img src={productImage}/>
        </div>
        <div className='details'>
          <div className='description'>
            <p>{productName}</p>
            <p>₹ {price}</p>
          </div>
          <div><small className='des'>{description}</small></div>
          <div>
          <button className='addToCartBttn' onClick={()=> addToCart(id)}>Add To Cart {quantity>0 && <>({quantity})</>} </button>
          </div>
        </div>
    </div>
  )
}

export default Product