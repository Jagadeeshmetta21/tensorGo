import React from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginPage = () => {
  const handleSuccess = (response) => {
    // Handle successful Google authentication
    // Send the access token to your backend for authentication
  };

  const handleFailure = (error) => {
    console.error('Google authentication failed:', error);
  };

  return (
    <div>
      <h1>Login with Google</h1>
      <GoogleLogin
        clientId="178453880255-n6opphlh9tvsien508jldj9iu0i9lp2o.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default LoginPage;