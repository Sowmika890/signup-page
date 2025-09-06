import React from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign up</h1>
        <p>Create your account</p>

        <div className="input-group">
          <input type="text" placeholder="Full Name" className="auth-input" />
        </div>

        <div className="input-group">
          <input type="email" placeholder="Email" className="auth-input" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" className="auth-input" />
        </div>

        <div className="input-group">
          <select className="auth-input">
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="auditor">Auditor</option>
            <option value="user">User</option>
          </select>
        </div>

        <button className="auth-btn">Sign up</button>

        

        <p className="switch">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
