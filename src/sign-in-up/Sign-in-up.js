import React  from 'react';
import './sign-in-up.css'
import GoogleLogin from 'react-google-login';
import { useEffect, useState } from 'react';
import { load } from 'gapi-script';

export default   function SignInUpForm() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    window.location.href = "/Appp";
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failure:', error);
  };

  return (
    <>
      <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <GoogleLogin
                clientId="131293938195-a3bm9o7oq76rg1ee9hibgr3gkboligoj.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleGoogleLoginSuccess}
                onFailure={handleGoogleLoginFailure}
              />
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <GoogleLogin
                clientId="131293938195-a3bm9o7oq76rg1ee9hibgr3gkboligoj.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleGoogleLoginSuccess}
                onFailure={handleGoogleLoginFailure}
              />
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}