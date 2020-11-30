import React, { useState, useEffect } from "react";

export const Profile = (props: any) => {

    return (

        <div className="col profile-col">
          {/* Left column */}
          <div className="profile-header">
            {/* Header information */}
            <h3 className="profile-fullname"><a>Jon Vadillo</a><a /></h3><a>
            </a><h2 className="profile-element"><a /><a>@jonvadillo</a></h2>
            <a className="profile-element profile-website" ><i className="octicon octicon-link" />&nbsp;jonvadillo.com</a>
            <a className="profile-element profile-website" ><i className="octicon octicon-location" />&nbsp;Vitoria-Gasteiz, Spain</a>
            <h2 className="profile-element"><i className="octicon octicon-calendar" />Joined November 2012</h2>
            <button className="btn btn-search-bar tweet-to-btn">Tweet to Jon Vadillo</button>
            <a className="profile-element profile-website" ><i className="octicon octicon-file-media" />1,142 Photos
              and videos</a>
            <div className="pic-grid">
              {/* Image grid */}
              <div className="row">
                <div className="col pic-col"><img src="https://pbs.twimg.com/media/DFCq7iTXkAADXE-.jpg:thumb"  height="73px" /></div>
                <div className="col pic-col"><img src="https://pbs.twimg.com/media/DEoQ0vyXoBA1cwQ.png:thumb"  height="73px" /></div>
                <div className="col pic-col"><img src="https://pbs.twimg.com/media/DDVbW4RXsAAasuw.jpg:thumb"  height="73px" /></div>
              </div>
              {/* End: row */}
              <div className="row">
                <div className="col pic-col"><img src="https://pbs.twimg.com/media/DFCq7iTXkAADXE-.jpg:thumb"  height="73px" /></div>
                <div className="col pic-col"><img src="https://pbs.twimg.com/media/DEoQ0vyXoBA1cwQ.png:thumb"  height="73px" /></div>
                <div className="col pic-col"><img src="https://pbs.twimg.com/media/DDVbW4RXsAAasuw.jpg:thumb"  height="73px" /></div>
              </div>
              {/* End: row */}
            </div>
            {/* End: image grid */}
          </div>
        </div>
      );
  
}


