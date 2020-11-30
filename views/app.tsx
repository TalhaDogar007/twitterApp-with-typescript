import React, { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { Tweet } from "./components/tweet";
import { Profile } from "./components/profile";
import { Follow } from "./components/follow";
import "./style/style.css";

export default function App(props: any) {
    return (
        <div>
            <NavBar {...props} />
            <div className="container main-content">
                <div className="row">
                    <Profile {...props} />
                    <Tweet {...props} />
                    <Follow {...props}/>
                </div>
            </div>

        </div>
    );
}


