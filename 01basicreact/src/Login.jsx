import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="col">
          <div className="left-header">
            <div className="col">
              <div className="logo">
                <img src="zoho.png" alt="" />
              </div>
            </div>
            <div className="col">
              <button className="scanbutton">
                Try Smart sign-in
                <img src="scan.png" alt="" />
              </button>
            </div>
          </div>
          <div className="text">
            <h1>Sign in</h1>
            <h3>to access Zoho Home</h3>
          </div>
          <div className="input">
            <input
              name=" "
              type="Email address or mobile numbar"
              placeholder="Email address or mobile numbar"
            ></input>
          </div>
          <div className="next">
            <button className="submitbutton">Next</button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Login;
