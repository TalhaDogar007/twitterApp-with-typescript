import React, { useState, useEffect } from "react";
import "../style/css/style.css";

  export default function Signup(props: any) {
 
    return (

        <div className="main">
          <section className="signup">
            <div className="container">
              <div className="signup-content">
                <div className="signup-form">
                  <h2 className="form-title">Sign up</h2>
                  <form method="POST" className="register-form" id="register-form">
                    <div className="form-group">
                      <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                      <input type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                      <input type="email" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                      <input type="password" name="pass" id="pass" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                      <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" required />
                    </div>
                    <div className="form-group form-button">
                      <input formAction="/auth/signup" type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
                    </div>
                  </form>
                </div>
                <div className="signup-image">
                  <figure><img src="/images/signup-image.jpg" alt="sing up image" /></figure>
                  <a href="/auth/signin" className="signup-image-link">I am already member</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
   
}


