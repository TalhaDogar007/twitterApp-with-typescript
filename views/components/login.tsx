import React, { useState, useEffect } from "react";
import "../style/css/style.css";

export default function Login(props: any) {
 

  return (

    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure><img src='/images/signin-image.jpg' alt="sing up image" /></figure>
              <a href="/auth/signup" className="signup-image-link">Create an account</a>
            </div>
            <div className="signin-form">
              <h2 className="form-title">login</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                  <input type="email" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                  <input type="password" name="pass" id="pass" placeholder="Password" required />
                </div>
                <div className="form-group form-button">
                  <input formAction="/auth/login" type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook" /></a></li>
                  <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter" /></a></li>
                  <li><a href="#"><i className="display-flex-center zmdi zmdi-google" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


