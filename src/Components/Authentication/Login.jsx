import React from 'react';

import logo from '../ressources/Logo.png'; // Replace with the actual path to your logo image

function LoginPage() {
  return (
    <div className="login-page">
      <div className='login'>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Login to your account</h1>
        <h5>Login using your social networks</h5>
        <button className="google-button">
        </button>

        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
      </div>
      <div className='new-user'>
        <h1>New here?</h1>
        <h5>Sign up and discover a great amount of new opportunities</h5>
        <button>Sign up</button>
      </div>
    </div>

  );
}

export default LoginPage;

