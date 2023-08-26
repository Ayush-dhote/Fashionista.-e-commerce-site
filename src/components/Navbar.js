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
    console.log(location);
    useEffect(()=>{
        const log= document.getElementById('right')
        const logo= document.getElementById('left')
        const menu= document.getElementById('menu')
        const icon= document.getElementById('icon')
        if(location==='/'){
            icon.addEventListener('click',()=>{
                menu.style.right='0'
            })
        }
        // console.log(menu,icon);
        if(location==='/cart'){
            log.style.display='none'
            logo.style.justifyContent='center'
        }
    },[location])
    
  return (
    <div id='nav'>
            <div id='left'><p>Fashionista<span>.</span></p></div>
            <div id='right'>
                <Link to='/cart' id='cart'><span>cart</span> <img id='cp' src="../cart.png" alt="Image" /></Link>
                
                <i id='icon' class="ri-menu-line"></i>
                <div id='menu'>
                {isLoggedIn ? <p>🙋‍♂️{name}</p> : <p>🙋‍♂️ <span>Guest</span></p>}
                {isLoggedIn ? (
                    <button className='islog' onClick={handleLogout}>Logout</button>
                ) : (
                    <button className='islog' onClick={handleLogin}>Login</button>
                )}
                </div>
            </div>
        </div>
  )
}

export default Navbar