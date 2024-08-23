import React, { useEffect } from 'react';
import './Toast.css'; // Import the CSS file for the toast

function Toast({ isActive, onClose }) {
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        onClose();
      }, 5000); // Show toast for 5 seconds
    }
    return () => clearTimeout(timer); // Clean up timer
  }, [isActive, onClose]);

  return (
    <div className={`toast ${isActive ? 'active' : ''}`}>
      <div className="toast-content">
        <i className="fas fa-solid fa-check check"></i>
        <div className="message">
          <span className="text text-1">Success</span>
          <span className="text text-2">Your Products Has Been Added</span>
        </div>
      </div>
      <i className="fa-solid fa-xmark close" onClick={onClose}></i>
      <div className="progress active"></div>
    </div>
  );
}

export default Toast;
