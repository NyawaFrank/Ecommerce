import React from "react";
import "./CSS/Loginsignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Adress" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an Account? <span>Log In</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
