import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import '../Common/styles.css';

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2>REGISTER</h2>
      <input type="email" className="form-input" placeholder="Email" />
      <input type="password" className="form-input" placeholder="Password" />
      <input type="password" className="form-input" placeholder="Confirm password" />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className="form-button">Create account</button>
      </Link>
    </div>
  );
};

export default RegisterForm;