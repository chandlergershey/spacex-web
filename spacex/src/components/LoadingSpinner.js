import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div>
      <center><br /><br /><br />
        <div className="loader" id="loader1" />
        <div className="loader" id="loader2" />
        <div className="loader" id="loader3" />
        <div className="loader" id="loader4" />
        <span id="text">LOADING...</span><br />
      </center>
    </div>
  )
}

export default LoadingSpinner
