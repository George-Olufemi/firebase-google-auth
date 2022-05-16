import React from 'react';
import './Login.css';
import { signInWithGoogle } from './firebase';

function Login() { 
  return (
    <div>
        <h1>Login (with Email)</h1>
        <button onClick={signInWithGoogle}>Google</button>
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem("profilePic")} />
    </div>
  )
}

export default Login;