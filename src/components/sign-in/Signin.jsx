import React from "react";
import "./signin.css";

export default function Signin() {
  return (
    <div class="signin-page">
      <div class="form">
        <form>
          <input type="text" placeholder="email address" />
          <input
            type="password"
            id="password"
            placeholder="put your password"
          />
        </form>

        <form class="signin-form">
          <button type="button">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}
