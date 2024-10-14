import React from "react";
import './EnterUrl.css'

const EnterUrl = () => {
  return (
    <div className="app-container">
      <div className="app-left">
        <h1><span>Url to Video</span> <br /> with power of AI</h1>
        <p>
          Discover how AI technology can transform website URLs into engaging
          videos in just a few clicks.
        </p>
        <input type="text" placeholder="Enter url..." />
        <button type="submit" className="app-button">Create Video</button>
      </div>
      <div className="app-right">
        video
      </div>
    </div>
  );
};

export default EnterUrl;
