import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='wrap-container'>
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : 'signup'}`}>
          {isLogin ? 'Login Form' : 'Signup Form'}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input 
            type="radio" 
            name="slide" 
            id="login" 
            checked={isLogin} 
            onChange={() => setIsLogin(true)} 
          />
          <input 
            type="radio" 
            name="slide" 
            id="signup" 
            checked={!isLogin} 
            onChange={() => setIsLogin(false)} 
          />
          <label 
            htmlFor="login" 
            className={`slide ${isLogin ? 'login' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </label>
          <label 
            htmlFor="signup" 
            className={`slide ${!isLogin ? 'signup' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            Signup
          </label>
          <div className={`slider-tab ${!isLogin ? 'signup' : ''}`}></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            <form className="login">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link"><a href="#">Forgot password?</a></div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="#" onClick={(e) => {
                  e.preventDefault();
                  handleFormSwitch();
                }}>Signup now</a>
              </div>
            </form>
          ) : (
            <form className="signup">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Confirm password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginSignup;

