import React, { useState, useEffect } from "react";

export const NavBar = (props: any) => {


  useEffect(() => {
    var modal = document.getElementById("myModal") as HTMLElement;
    var btn = document.getElementById("myBtn") as HTMLElement;
    var span = document.getElementsByClassName("close")[0] as HTMLElement;
    btn.onclick = function () {
      modal.style.display = "block";
    }
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event: any) {
      if (event.target == modal)
        modal.style.display = "none";
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-toggleable-md fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"><i className="octicon octicon-home" aria-hidden="true" /> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="octicon octicon-zap" /> {props.message}Moments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="octicon octicon-bell" /> Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="octicon octicon-inbox" /> Messages</a>
            </li>
          </ul>
          <form className="navbar-form" role="search">
            <div className="input-group">
              <input type="text" className="form-control input-search" placeholder="Search Twitter" name="srch-term" id="srch-term" />
              <div className="input-group-btn">
                <button className="btn btn-default btn-search" type="submit"><i className="octicon octicon-search navbar-search-icon" /></button>
              </div>
            </div>
          </form>
          <div className="dropdown navbar-user-dropdown">
            <button className="btn btn-secondary dropdown-toggle btn-circle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <button className="btn btn-search-bar" id="myBtn">Tweet</button>
          <form method="POST" className="register-form" id="login-form">
            <div id="myModal" className="modal">
              <div className="modal-content">
                <span className="close">×</span>
                <textarea name="tweet[]" className="postinput" required defaultValue={""} />
                <div className="form-group form-button">
                  <input formAction="/tweet" type="submit" name="signin" id="signin" className="form-submit" value="POST" />
                </div>
              </div>
            </div>
          </form>
          <a className="btn btn-search-bar" type="submit" href="/auth/signup">
            Signup
                </a>
          <a className="btn btn-search-bar" type="submit" href="/auth/signin">
            Login
                </a>
          <a className="btn btn-search-bar" type="submit" href="/auth/logout">
            Logout
                </a>
        </div>
      </nav>
      <div className="main-container">
        <div className="row profile-background">
          <img className="backgroundimg" src="https://source.unsplash.com/user/erondu/874x320" alt="" />
          <div className="container">
            <div className="avatar-container">
              <img className="avatar" src="https://source.unsplash.com/user/erondu" alt="" />
            </div>
          </div>
        </div>
        <nav className="navbar profile-stats">
          <div className="container">
            <div className="row">
              <div className="col">
              </div>
              <div className="col-6">
                <ul>
                  <li className="profile-stats-item-active">
                    <a type="submit" href="/tweet">
                      <span className="profile-stats-item profile-stats-item-label">Tweets</span>
                      <span className="profile-stats-item profile-stats-item-number">51</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="profile-stats-item profile-stats-item-label">Following</span>
                      <span className="profile-stats-item profile-stats-item-number">420</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="profile-stats-item profile-stats-item-label">Followers</span>
                      <span className="profile-stats-item profile-stats-item-number">583</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="profile-stats-item profile-stats-item-label">Likes</span>
                      <span className="profile-stats-item profile-stats-item-number">241</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
              </div>
            </div>
          </div>
        </nav>
      </div></div>
  );
}


