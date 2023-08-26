import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productContext } from './Context'
import Menu from './Menu'


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

    const [size, setSize] = useState(window.innerWidth);
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    useEffect(() => {
      // Add resize event listener to update the size state
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    let location=window.location.pathname
    useEffect(()=>{
        const log= document.getElementById('right')
        const logo= document.getElementById('left')
        // console.log(log);    
        if(location==='/cart'){
            log.style.display='none'
            logo.style.justifyContent='center'
        }
    },[location])
    
    useEffect(()=>{
        const user=document.getElementsByClassName('username')
        const butt=document.getElementsByClassName('islog')
        const icon=document.getElementById('icon')
        const menu=document.getElementById('menu')
        console.log(user);
        if(size<=600){
            butt[0].style.display="none"
            user[0].style.display="none"
            icon.style.display='initial'
        }else if(size>600){
            butt[0].style.display="initial"
            user[0].style.display="initial"
            icon.style.display='none'
            menu.style.right='-30'
        }
        icon.addEventListener('click',()=>{
            menu.style.right='0'
        })
    },[size])
  return (
    <div id='nav'>
            <div id='left'><p>Fashionista<span>.</span></p></div>
            <div id='right'>
                {isLoggedIn ? <p className='username'>🙋‍♂️{name}</p> : <p className='username'>🙋‍♂️ <span>Guest</span></p>}
                <Link to='/cart' id='cart'><span>cart</span> <img id='cp' src="../cart.png" /></Link>
                {isLoggedIn ? (
                    <button className='islog' onClick={handleLogout}>Logout</button>
                ) : (
                    <button className='islog' onClick={handleLogin}>Login</button>
                )}
                <div>
                    <i id='icon' class="ri-menu-line"></i>
                </div>
                <Menu/>
            </div>
        </div>
  )
}

export default Navbar