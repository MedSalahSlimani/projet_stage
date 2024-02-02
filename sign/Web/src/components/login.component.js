import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosLock } from "react-icons/io";

export default class Login extends Component {
  
  render(){
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
      
              <label className='forget'>
               <br/> 
               <a href='#'>forgot password</a>
               
              </label>
            </div>
          

          <div className="d-grid">
            <button  className="btn btn-primary"  >
              Sign in <a href="http://localhost:3001/">Sign in</a>
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
