import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import '../Common/styles.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Nickname: nickname, Password: password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('User created successfully');
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-form">
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
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
        <input
          type="password"
          className="form-input"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="form-button">Create account</button>
      </form>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button className="form-button">Login</button>
      </Link>
    </div>
  );
};

export default RegisterForm;
