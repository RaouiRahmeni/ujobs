import React from "react";
import "./signin.css";

export default function Signin() {
  return (
    <div className="signin">
      <span className="signinTitle">Sign-up</span>
      <form className="signinForm">
        <label>Email</label>
        <input
          type="text"
          className="signinInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="signinInput"
          placeholder="Enter your password..."
        />
        <button className="signinBtn" type="submit">
          SIGN-IN
        </button>
      </form>
      <button className="loginRegisterButton">
        <a className="link" to="/signup">
          SIGN-UP
        </a>
      </button>
    </div>
  );
}
