import React from 'react';
import "./Sidenavbar.css";

function Sidenavbar() {
  const handleButtonClick = () => {
    window.location.href = '/Login';
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleButtonClick}>SIGN IN</button>
    </div>
  );
}

export default Sidenavbar;