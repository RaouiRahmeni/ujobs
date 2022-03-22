import React from "react";
import "./signup.css";
export default function Signup() {
  return (
    <div class="signup-page">
      <div class="form">
        <form>
          <input type="text" placeholder="full name" />
          <input type="text" placeholder="email address" />
          <input type="password" id="password" placeholder="set a password" />
        </form>

        <form class="signup-form">
          <button type="button">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
