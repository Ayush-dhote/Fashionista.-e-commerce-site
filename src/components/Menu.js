import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Menu = () => {
    const name=sessionStorage.getItem('user-email')
    const [isLoggedIn,setIsLoggedIn]=useState(!!sessionStorage.getItem('user-email'))
    const navi=useNavigate()

    function handleLogin(){
        navi('/auth')
    }
    function handleLogout(){
        sessionStorage.removeItem('user-email');
        setIsLoggedIn(false);
        navi('/auth')
    }
  return (
    <>
        <div id='menu'>
                <div className='men' id='header'>
                {isLoggedIn ? <p>🙋‍♂️{name}</p> : <p>🙋‍♂️ <span>Guest</span></p>} <i class="ri-close-line"></i> 
                </div>
                <div className='men'>
                    <p>Orders</p>
                </div>
                <div className='men'>
                    <p>Accounts</p>
                </div>
                <div className='men'>
                    <p>Settings</p>
                </div>
                <div className='men'>
                    <p>About Us</p>
                </div>
                <div id='base'>
                    {isLoggedIn ? (
                        <button className='islog' onClick={handleLogout}>Logout</button>
                    ) : (
                        <button className='islog' onClick={handleLogin}>Login</button>
                    )}
                </div>
        </div>
    </>
  )
}

export default Menu