import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="topLeft">
        <span className="titlee">uJOBS</span>
      </div>

      <div className="topCenter">
        <ul className="toplist">
          <li className="toplistItem">
            <a className="link" to="/">
              HOME
            </a>
          </li>
          <li className="toplistItem">
            <a className="link" to="###">
              OFFERS
            </a>
          </li>
          <li className="toplistItem">
            <a className="link" to="###">
              PARTNERS
            </a>
          </li>
          <li className="toplistItem">
            <a className="link" to="###">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <button>
          <a className="link" herf="/signin">
            SIGN-IN
          </a>
        </button>
      </div>
    </div>
  );
}
