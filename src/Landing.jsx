
import React, { useState } from 'react';
import Service from './Service';
import AboutUs from './Aboutus';
import './Landing.css';
import Learnmore from './Learnmore';
import LoginSignup from './LoginSignup';
// import { useNavigate } from 'react-router-dom';
import Home from './Home';

function Landing() {
// const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'service':
        return <Service />;
      case 'about':
        return <AboutUs />;
      case 'learnmore':
        return <Learnmore />;  
      case 'loginsignup':
        return <LoginSignup />;  
      default:
        return (
          <div className='landing-container'>
            <nav>
              <div className='mandi-brandlogo'>E MANDI</div>
              <div className='lbuttons'>
                <button onClick={() => setCurrentPage('home')}>HOME</button>
                <button onClick={() => setCurrentPage('service')}>SERVICE</button>
                <button onClick={() => setCurrentPage('about')}>ABOUT US</button>
              </div>
            </nav>
            <div className='box-content'>
              <div className='scontentbox'>
                <h1>MY MANDI<span>.com</span></h1>
                <h1>Market at your Doorstep</h1>
                <p>we deliver fresh vegetables & fruits to your home</p>
                <button onClick={() => setCurrentPage('learnmore')}>LEARN MORE</button>
              </div>
              <div className='scontentbox'>
                <h1>GET STARTED WITH SIGN UP</h1>
                <button onClick={() => setCurrentPage('loginsignup')}>SIGN UP</button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="landing-page">
      {renderContent()}
    </div>
  );
}

export default Landing;

