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
                {isLoggedIn ? <p>🙋‍♂️{name}</p> : <p>🙋‍♂️ <span>Guest</span></p>}
                {isLoggedIn ? (
                    <button className='islog' onClick={handleLogout}>Logout</button>
                ) : (
                    <button className='islog' onClick={handleLogin}>Login</button>
                )}
        </div>
    </>
  )
}

export default Menu