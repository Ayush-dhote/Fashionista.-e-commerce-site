import React, { useContext, useState } from 'react'
import '../home.css'
import Cart from './Cart'
import Product from './Product'
import { Products } from './Products'
import '../products.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import Footer from './Footer'

const Home = () => {

  return (
    <div id='home'>
        <Navbar />
        <div className='titleText'><h2>Newly Arrived</h2></div>
        {/* <div id="loader">
        <div id="wrapperload">
            <div class="elem">
            <h1>Newly Arrived</h1>
            </div>
            <div class="elem">
                <h1>UI/UX Designer</h1>
            </div>
            <div class="elem">
                <h1>loves to help brands.</h1>
            </div>
        </div>
    </div> */}
        <div className='products'>
            {Products.map((element)=>{
               return <Product key={element.id} data={element}/>
            })}
        </div>

        <Footer/>
    </div>
  )
}

export default Home