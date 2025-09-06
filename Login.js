import React from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Enter your credential to login</p>

        <div className="input-group">
          <input type="text" placeholder="Username" className="auth-input" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" className="auth-input" />
        </div>

        <button className="auth-btn">Login</button>

        <p className="forgot">Forgot password?</p>

        <p className="switch">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
