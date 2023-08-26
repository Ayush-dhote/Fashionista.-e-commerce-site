import React, { useContext, useEffect } from 'react'
import { useRef } from 'react'
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

    let location=window.location.pathname
    useEffect(()=>{
        const log= document.getElementById('right')
        const logo= document.getElementById('nav')
        console.log(log);
        if(location==='/cart'){
            log.style.display='none'
            logo.style.justifyContent='center'
        }
    },[location])

    const leftDivRef = useRef(null);
    const accessDiv = () => {
      if (leftDivRef.current) {
        // Manipulate the div element here
        leftDivRef.current.style.display = 'none';
      }
    };
    
  return (
    <div id='nav'>
            <div id='left' ref={leftDivRef}><p>Fashionista<span>.</span></p></div>
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