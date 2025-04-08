import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="card">
      <div className="loader">
        <p>AI</p>
        <div className="words">
          <span className="word">Processing</span>
          <span className="word">Connecting</span>
          <span className="word">Working</span>
          <span className="word">Tasking</span>
          <span className="word">Building</span>
        </div>
      </div>
    </div>
    
  );
};

export default Spinner;
