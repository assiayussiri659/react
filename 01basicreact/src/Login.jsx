import React from "react";
import "./Login.css";
const Login = () => {

  return (
    <div className="main">
      <div className="col">
        <div className="inside">
          <img className="logo" src="zoho.png" alt="" />
          <button className="smartbutton">
            <span className="smartQr">
              <img className="scan" src="scan.png" alt="" />
            </span>
            <span className="text">Try smart sign-in</span>
          </button>
          <span className="sing">Sign in</span>
          <div className="service">
            <span>to access Start</span>
            <div className="input-box">
              <input
                className="input"
                type="text"
                placeholder="Email address or mobile number "
                name=""
                id=""
              />
              <div className="next-button">
                <button className="next">Next</button>
                <div className="signin-text">
                  <h2>Sign in using</h2>
                  <div className="icons">
                    <img className="iconsItem" src="microsoft.png" alt="" />
                    <img className="iconsItem" src="apple.png" alt="" />
                    <img className="iconsItem" src="google.png" alt="" />
                    <img className="iconsItem" src="linkedin.png" alt="" />
                    <img className="iconsItem" src="twitter.png" alt="" />
                    <img className="iconsItem" src="facebook.png" alt="" />
                    <div className="link">
                      <h4>Don't have a Zoho account?</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-header">
          <div className="side-box">
            <div className="banner">
            <img className="banner-img" src="banner2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
