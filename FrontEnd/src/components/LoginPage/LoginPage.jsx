
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from '../Navbar/Navbar';

function LoginPage() {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', true);
    navigate('/home');
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1>Login</h1>
        <p>By signing in, you are agreeing to our terms and conditions.</p>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="additional-options">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <div className="social-login">
            <button className="google-btn">Connect with Google</button>
            <button className="linkedin-btn">Connect with LinkedIn</button>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  );
}

export default LoginPage;