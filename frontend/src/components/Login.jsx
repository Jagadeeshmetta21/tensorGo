import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const Login = () => {
  const handleGoogleLogin = (response) => {
    // Handle successful Google login
    axios.fetch('http://localhost:5000/auth/google').then((response) => {
      console.log(response);
    });
    
  };

  const handleFailure = (error) => {
    // Handle login failure
    console.error(error);
  };

  return (
    <div>
      <h2>Login with Google</h2>
      {/* <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      /> */}
      <a href="http://localhost:5000/auth/google">Login</a>
    </div>
  );
};

export default Login;