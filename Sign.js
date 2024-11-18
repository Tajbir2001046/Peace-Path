import React from 'react';
import './Sign.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-quote">
          <h2>
            "Mental health is more <span className="highlight">important then</span> any <span className="highlight">other things.</span>."
          </h2>
          <p>- Peace Path</p>
        </div>
        <div className="signup-form">
          <h3>Sign Up</h3>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label>Repeat Password</label>
              <input type="password" placeholder="Repeat Password" />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="social-login">
            <p>or</p>
            <button className="google-button">Google</button>
            <button className="facebook-button">Facebook</button>
          </div>
          <p className="already-account">
            Already have an account? <a href="/login" className="login-link">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
