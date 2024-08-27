import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login-signup.css';

function Signup({ setIsAuthenticated }) {
  const [identifier, setIdentifier] = useState(''); // Email or phone
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (identifier.trim() && password.trim()) {
      // Send verification code to email/phone
      sendVerificationCode(identifier);
      setIsCodeSent(true);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (verificationCode.trim()) {
      // Verify the code entered by the user
      verifyCode(verificationCode).then(isValid => {
        if (isValid) {
          // Proceed to create the user account and authenticate
          setIsAuthenticated(true);
          navigate('/blog');
        } else {
          alert("Invalid verification code");
        }
      });
    }
  };

  const sendVerificationCode = (identifier) => {
    // Logic to send verification code to email/phone via your backend
    console.log(`Verification code sent to ${identifier}`);
  };

  const verifyCode = async (code) => {
    // Logic to verify the code via your backend
    console.log(`Verifying code: ${code}`);
    // Simulate verification process
    return true;
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Sign Up</h2>
      <form onSubmit={isCodeSent ? handleVerifyCode : handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Enter your email or phone number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="input-field"
          required
          disabled={isCodeSent}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
          disabled={isCodeSent}
        />
        {isCodeSent && (
          <>
            <input
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="input-field"
              required
            />
            <button type="submit" className="submit-button">Verify and Sign Up</button>
          </>
        )}
        {!isCodeSent && (
          <button type="submit" className="submit-button">Send Verification Code</button>
        )}
      </form>
      <p className="already-have-account">Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Signup;
