import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IoIosLock } from "react-icons/io";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter username"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone">Phone number</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-telephone"></i>
            </span>
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <span className="input-group-text">
            <IoIosLock />
            </span>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
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

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up <a href="http://localhost:3002/">Sign up</a>
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/sign-in">Sign in</a>
        </p>
      </form>
    );
  }
}
