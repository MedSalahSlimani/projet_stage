import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
  render() {
    return (
      
      <div>
        <form>
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
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
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
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
               <br/> Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          
          <p className="forgot-password text-right">
            Forgot <a href="/sign-up">sign up?</a>
          </p>
          
    
        </form>
      </div>
    );
  }

}
