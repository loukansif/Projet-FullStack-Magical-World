import React from "react";
import { NavLink } from "react-router-dom";
import matriceLogo from "../assets/images/matriceLogo.png";

function Navbar() {
  return (
    <div className="navigation">
      <NavLink className="navbar-brand" to="/">
        <img src={matriceLogo} className="logoMatrice" alt="Logo" />
      </NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Jouets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category">
              Catégories
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
