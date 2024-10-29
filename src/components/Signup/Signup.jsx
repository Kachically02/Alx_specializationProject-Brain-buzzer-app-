import React from "react";
import Loginimg from '../../Assets/login.svg'
import google from "../../Assets/google.svg"
import "./Signup.css"

function Signup() {
  return (
    <div className="Main-container">
      <div className="Image">
        <img src={Loginimg} alt="" />
      </div>
      <div className="form">
        <h3>Create Account</h3>
        <p>Enter Your Details Below</p>
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <label>Confirm Password</label>
        <input type="password" placeholder="confirm your password" />
        <div className="action">
          <h6>
            {" "}
            <input type="checkbox" id="myCheckbox"></input> Remember Password
          </h6>
        </div>
        <button className="Login-button">Sign-Up</button>
        <p>Or</p>
        <button className="Sign-up">
          <img src={google} /> <a href="#"> Continue With Google</a>
        </button>
      </div>
    </div>
  );
}

export default Signup;
