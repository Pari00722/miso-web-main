import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login-signup.css";
import { auth, googleProvider } from "../Firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  TwitterAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";

function Signup({ setIsAuthenticated }) {
  const [identifier, setIdentifier] = useState(""); // Email or phone
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Function to handle Google Sign-In
  const SignupWithGoogle = async () => {
    try {
      console.log("Opening Google sign-in popup...");

      // Start sign-in with a popup
      const result = await signInWithPopup(auth, googleProvider);

      // Get signed-in user info
      const user = result.user;
      setUser(user); // Set the user in state after sign-in
      console.log("Google sign-in successful, user: ", user);

      // Update authentication status
      setIsAuthenticated(true);

      // Redirect to blog after successful sign-in
      navigate("/blog");
    } catch (error) {
      // Handle sign-in errors and log them for debugging
      console.error("Error during Google sign-in: ", error);
      alert(`Error during sign-in. Please try again. Error: ${error.message}`);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (identifier.trim() && password.trim()) {
      sendVerificationCode(identifier);
      setIsCodeSent(true);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (verificationCode.trim()) {
      verifyCode(verificationCode).then((isValid) => {
        if (isValid) {
          setIsAuthenticated(true);
          navigate("/blog");
        } else {
          alert("Invalid verification code");
        }
      });
    }
  };

  const sendVerificationCode = (identifier) => {
    console.log(`Verification code sent to ${identifier}`);
  };

  const verifyCode = async (code) => {
    console.log(`Verifying code: ${code}`);
    return true; // Simulate verification success
  };

  const CreateUser = () => {
    createUserWithEmailAndPassword(auth, identifier, password)
      .then(() => alert("User account created successfully!"))
      .catch((error) => alert(`Error: ${error.message}`));
  };

  // Twitter Sign-In
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Twitter sign-in successful, user: ", user);
        setUser(user);
        setIsAuthenticated(true);
        navigate("/blog");
      })
      .catch((error) => {
        console.error("Error during Twitter sign-in: ", error);
        alert(`Error during Twitter sign-in: ${error.message}`);
      });
  };

  const [log_user, log_setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        log_setUser(user);
      } else {
        log_setUser(null);
      }
    });
  }, []);

  // If the user is not signed in, display the signup form
  if (log_user === null) {
    return (
      <div className="auth-container">
        <h2 className="auth-heading">Sign Up</h2>
        <form
          onSubmit={isCodeSent ? handleVerifyCode : handleSignup}
          className="signup-form"
        >
          <input
            type="text"
            placeholder="Enter your email"
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
              <button
                type="submit"
                onClick={CreateUser}
                className="submit-button"
              >
                Verify and Sign Up
              </button>
            </>
          )}
          {!isCodeSent && (
            <button type="submit" className="submit-button">
              Send Verification Code
            </button>
          )}
        </form>
        <p className="already-have-account">
          Already have an account? <a href="/login">Login here</a>
          <p className="border-2 border-gray-900"></p>
        </p>
        <br />
        <div className="flex gap-7 justify-center">
          <FcGoogle
            className="text-center text-2xl hover:text-3xl ease-in-out duration-75 transition-all cursor-pointer justify-center items-center"
            onClick={SignupWithGoogle}
          />
          <FaSquareXTwitter
            onClick={signInWithTwitter}
            className="text-center text-2xl hover:text-3xl ease-in-out duration-75 transition-all cursor-pointer justify-center items-center"
          />
        </div>
      </div>
    );
  }

  // If the user is signed in, show the logged-in message
  return (
    <>
      <div className="text-center pt-7">
        <p className="text-3xl font-bold text-purple-800">
          You are Signed In SuccessFully
        </p>

        <button
          className="text-white mt-11 bg-gradient-to-b from-purple-500 to-purple-700 hover:to-purple-900 px-4 py-2 mx-2 rounded-lg"
          onClick={() => signOut(auth)}
        >
          <Link to="/">Continue Shopping</Link>
        </button>

        <button
          className="text-white mt-11 bg-gradient-to-b from-purple-500 to-purple-700 hover:to-purple-900 px-4 py-2 mx-2 rounded-lg"
          onClick={() => signOut(auth)}
        >
          Logout!
        </button>
      </div>
    </>
  );
}

export default Signup;
