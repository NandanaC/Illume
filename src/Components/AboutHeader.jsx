import React, { useState } from "react";
import './Styles/AboutHeader.css'

function AboutHeader() {
    return (
        <div className="header">
            <div className="inner_header">
                <div className="logo_container_header">
                    <div className="logo">
                        <a href="#"><img src="./logo_diamond1.png" alt="illume"></img></a>
                    </div>
                    <h1>ILLUME</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader;