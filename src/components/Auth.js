import React, { useState } from 'react'
import '../auth.css'
import { useNavigate } from 'react-router';

const Auth = () => {
    
      const [users, setUsers] = useState([]);  
    //   console.log(users);
    const navigate=useNavigate()

      const submitHandle = (e) => {
        e.preventDefault();
        const newUser = {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value
        };

        const updatedUsers = [...users, newUser];
        // console.log(updatedUsers);

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
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

  return (
    <div id='main'>
        <div id='register'>
            <form onSubmit={submitHandle}>
                <h1>Register</h1>
                <input name='name' type="text" min="5" max="15" required placeholder="name"/>
                <input name='email' type="email" required placeholder='Email'/>
                <input name='password' id="password" type="password" min="5" max="15" required placeholder="password"></input>
                <input id="button" type="submit"></input>
            </form>
        </div>
        <div id='login'>
            <form onSubmit={loginHandle}>
                <h1>Login</h1>
                <input name='email' type="email" required placeholder='Email' />
                <input name='password' id="lpassword" type="password" min="5" max="15" required placeholder="password"></input>
                <input id="lbutton" type="submit"></input>
            </form>
        </div>
    </div>
  )
}

export default Auth
