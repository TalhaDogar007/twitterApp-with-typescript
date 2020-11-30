import React, { useState, useEffect } from "react";

export const Follow = (props: any) => {
 
    return (

        <div className="col right-col">
          <div className="content-panel">
            <div className="panel-header">
              <h4>Who to follow</h4>
              <small><a >Refresh</a></small>
              <form method="get" className="register-form" id="login-form">
                <small><a href="/people">View all</a></small>
              </form>
            </div>
            <div className="panel-content">
              <ol className="tweet-list">
                <li className="tweet-card">
                  <div className="tweet-content">
                    <img className="tweet-card-avatar" src="https://source.unsplash.com/user/erondu" alt="" />
                    <div className="tweet-header">
                      <span className="fullname">
                        <strong>Talha </strong>
                      </span>
                      <span className="username"></span>
                    </div>
                    <form method="post" className="register-form" id="login-form">
                      <input formAction="/people/<%= people[key].id %>" type="submit" name="signin" className="btn btn-follow" defaultValue={"Follow"} />
                    </form>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      );
}


