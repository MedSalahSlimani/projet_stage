import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IoIosLock } from "react-icons/io";
class Login extends Component {
  render() {
    return (
      <div>
        <EmailVerificationComponent />
      </div>
    );
  }
}

const EmailVerificationComponent = () => {
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const verifyEmail = () => {
    if (email.includes('@')) {
      if (isAdmin) {
        if (email === 'admin-user@gmail.com') {
          alert('Email is valid for admin');
        } else {
          alert('Incorrect email for admin, please refill');
        }
      } else {
        alert('Email is valid');
      }
    } else {
      alert('Invalid email, "@" symbol is missing');
    }
  };

  const handleAdminCheckboxChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  const handleSignInLinkClick = () => {
    // Handle navigation to the sign-in page
  };

  return (
    <div style={{ marginBottom: '1rem', background: '#ffffff' }}>
      <label htmlFor="email">Email address</label>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>
        <input type="text" id="email" value={email} onChange={handleEmailChange} style={{ width: '100%' }}   className="form-control"
              placeholder="Enter email" />
           
      </div>
      <div className="mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-group">
            <span className="input-group-text">
            <IoIosLock />
            </span>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          </div>
      <label>
        Admin:
        <input type="checkbox" checked={isAdmin} onChange={handleAdminCheckboxChange} />
      
      </label>
      <br/> 
      
      <button onClick={verifyEmail} style={{ cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
        Verify Email
      </button>
     
      {/* Placeholder for the form */}
     
      <form>
        {/* Add your form elements here */}
        <div style={{ display: 'grid', marginTop: '1rem' }}>
          <button type="submit" style={{ cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
            Sign in <a href="http://localhost:3000/">Sign up</a>
          </button>
        </div>
      </form>

      <p style={{ textAlign: 'right', marginTop: '1rem', fontSize: '0.875rem' }}>
        Already registered? <a href="/sign-up" onClick={handleSignInLinkClick} style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</a>
      </p>
    </div>
  );
};

export default Login;