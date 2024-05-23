import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../Common/styles.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2>LOGIN</h2>
      <input type="email" className="form-input" placeholder="Email" />
      <input type="password" className="form-input" placeholder="Password" />
      <button className="form-button">Login</button>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <button className="form-button">Register</button>
      </Link>
    </div>
  );
};

export default LoginForm;