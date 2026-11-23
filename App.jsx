import React, { useState } from 'react';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="App">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
            <AboutUs />
          </div>
        </div>
      ) : (
        <div className="product-list-placeholder">
          <h2>Paradise Nursery Plants</h2>
          <button onClick={() => setShowProductList(false)}>Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default App;
