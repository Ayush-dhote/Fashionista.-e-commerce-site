import React, { useContext, useState } from 'react'
import '../home.css'
import Cart from './Cart'
import Product from './Product'
import { Products } from './Products'
import '../products.css'
import Navbar from './Navbar'

const Home = () => {

  return (
    <div id='home'>
        <Navbar />
        <div className='titleText'><h2>Newly Arrived</h2></div>
        <div className='products'>
            {Products.map((element)=>{
               return <Product key={element.id} data={element}/>
            })}
        </div>
        <div className='footer'></div>
    </div>
  )
}

export default Home