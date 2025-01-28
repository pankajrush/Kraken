import React from "react";
import "./Login.css";
import kraken from "../../assets/kraken logo.png";
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/twostep')
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
            <button className="createaccount">Create Account</button>
          </div>
        </div>
        <form className="logincontainer" onSubmit={handlesubmit}>
          <h1>Sign in to Kraken</h1>
          <input className='text' type="text" placeholder="Email or username" required />
          <input className='password' type="password" placeholder="Password" required />
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
