import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import '../Common/styles.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('user-info', data.token);
        navigate('/profile');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="form-button">Login</button>
      </form>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <button className="form-button">Register</button>
      </Link>
    </div>
  );
};

export default LoginForm;
