import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login-signup.css';

function Login({ setIsAuthenticated }) {
  const [identifier, setIdentifier] = useState(''); // Identifier could be email or phone
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (identifier.trim() && password.trim()) {
      // Here you would add logic to authenticate the user with the identifier (email/phone) and password
      setIsAuthenticated(true);
      navigate('/blog');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Enter your email or phone number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p className="already-have-account">Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
}

export default Login;
