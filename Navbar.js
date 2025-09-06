import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">AuthApp</h2>
      <div>
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
