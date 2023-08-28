import React, { useState } from 'react'
import { useEffect } from 'react';
import '../auth.css'
import { useNavigate } from 'react-router';

const Auth = () => {
    
    const [users, setUsers] = useState([]);  
    useEffect(() => {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(existingUsers);
    }, []);
    
    //   console.log(users);
    const navigate=useNavigate()

      const submitHandle = (e) => {
        e.preventDefault();
        const newUser = {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value
        };
        setUsers((prevUsers) => [...prevUsers, newUser])

        localStorage.setItem('users', JSON.stringify([...users,newUser]));
        alert("user registered")
        e.target.reset(); 
      };
  

      function loginHandle(event){
        event.preventDefault()
        const email=event.target.email.value
        const password=event.target.password.value
        // console.log(email,password);

        let us=localStorage.getItem('users')
        let jsonUser=JSON.parse(us)
        jsonUser.forEach(elem=>{
            if(email===elem.email && password===elem.password){
                sessionStorage.setItem('user-email',elem.name)
                navigate('/')
            }
        })
      }
      
      useEffect(()=>{
        const exist=document.getElementById('exist')
        const login=document.getElementById('login')
        const register=document.getElementById('register')
        const dont=document.getElementById('dont')

        exist.addEventListener('click',()=>{

          login.style.animation = 'rotateEffect 0.5s ease both';
          register.style.animation = 'rotateOutEffect 0.5s ease both';
          login.style.left='50vw'
          login.style.opacity='1'
          register.style.left='35vw'
          register.style.opacity='0'

          login.style.pointerEvents = 'initial';
          register.style.pointerEvents = 'none'; 
        })

        dont.addEventListener('click',()=>{

          login.style.transition = 'left 0.5s ease, opacity 0.5s ease';
          register.style.transition = 'left 0.5s ease, opacity 0.5s ease';
          login.style.left='65vw'
          login.style.opacity='0'
          register.style.left='50vw'
          register.style.opacity='1'
          login.style.pointerEvents = 'none';
          register.style.pointerEvents = 'initial'; 
        })
      },[])

  return (
    <div id='main'>
        <div id='register'>
            <form onSubmit={submitHandle}>
                <h1>Register</h1>
                <input name='name' type="text" min="5" max="15" required placeholder="name"/>
                <input name='email' type="email" required placeholder='Email'/>
                <input name='password' id="password" type="password" min="5" max="15" required placeholder="password"></input>
                <input id="button" type="submit"></input>
                <h5 id='exist'>Already have account!</h5>
            </form>
        </div>
        <div id='login'>
            <form onSubmit={loginHandle}>
                <h1>Login</h1>
                <input name='email' type="email" required placeholder='Email' />
                <input name='password' id="lpassword" type="password" min="5" max="15" required placeholder="password"></input>
                <input id="lbutton" type="submit"></input>
                <h5 id='dont'>Create account</h5>

            </form>
        </div>
    </div>
  )
}

export default Auth
