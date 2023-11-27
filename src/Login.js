import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Login.css';
import { auth } from './firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const logIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form onSubmit={logIn}>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            required
            placeholder="xyz@gmail.com"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            required
            placeholder="Enter your password"
          />
          <button type="submit" className="sign_in_button">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions and Privacy Notice and
          our Cookies
        </p>
        <button onClick={signIn} className="sign_up_button">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;

