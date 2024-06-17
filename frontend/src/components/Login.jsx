import React from 'react';
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
    <div style={{textAlign: 'center'}}>
      <h2>Login with Google</h2>
      {/* <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      /> */}
      <a href="http://localhost:5000/auth/google" style={{border: '1px solid gray', backgroundColor: 'black', color:'white', padding: '5px 20px'}}>Login</a>
    </div>
  );
};

export default Login;