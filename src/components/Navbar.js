import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productContext } from './Context'


const Navbar = () => {

    const {cartItems}=useContext(productContext)
    // const quantity=cartItems[id]
    
    const navi=useNavigate()
    const [isLoggedIn,setIsLoggedIn]=useState(!!sessionStorage.getItem('user-email'))
    function handleLogin(){
        navi('/auth')
    }
    function handleLogout(){
        sessionStorage.removeItem('user-email');
        setIsLoggedIn(false);
        navi('/auth')
    }
    const name=sessionStorage.getItem('user-email')
  return (
    <div id='nav'>
            <div id='left'><p>Fashionista<span>.</span></p></div>
            <div id='right'>
                {isLoggedIn ? <p>🙋‍♂️{name}</p> : <p>🙋‍♂️ <span>Guest</span></p>}
                <Link to='/cart' id='cart'><span>cart</span> <img id='cp' src="../cart.png" alt="Image" /></Link>
                {isLoggedIn ? (
                    <button className='islog' onClick={handleLogout}>Logout</button>
                ) : (
                    <button className='islog' onClick={handleLogin}>Login</button>
                )}
            </div>
        </div>
  )
}

export default Navbar