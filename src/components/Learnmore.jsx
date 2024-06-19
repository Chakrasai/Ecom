import React from 'react';
import './Learnmore.css';

const Learnmore = () => {
  return (
    <div className="learn-container">
        <h1>LEARN MORE</h1>
      <header>
        
        <button className="discover-button">Discover Fresh Produce</button>
      </header>
      <main>
        <section className="content">
          <h1>Boost Your Marketing for E-Mandi</h1>
          <p>Connecting farmers with consumers through efficient marketing</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for fruits, vegetables, or marketing tips..." />
            <button className="search-button">Search</button>
          </div>
        </section>
        <aside className="graphics">
          <img src="" alt="E-Mandi" className="e-mandi" />
          <div className="market-grid">
            <img src="market.png" alt="Market" />
          </div>
          <div className="floating-icons">
            <img src="https://i.postimg.cc/3RynsP8k/R.jpg" alt="Fruits Icon" className="icon fruits" />
            <img src="https://i.postimg.cc/PrLnLMWk/R-1.jpg" alt="Vegetables Icon" className="icon vegetables" />
            <img src="https://i.postimg.cc/QtNRjg8w/market-icons-23-2147512921.avif" alt="Marketing Icon" className="icon marketing" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Learnmore;
