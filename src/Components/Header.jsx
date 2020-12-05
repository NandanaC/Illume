import React, { useState } from "react";
import "./Styles/Header.css";

function Header() {
    const [showHover, setShowHover] = useState(false);
    return (
        <div className="header">
            <div className="inner_header">
                <div className="logo_container_header">
                    <div className="logo">
                        <a href="#"><img src="./logo_diamond1.png" alt="illume"></img></a>
                    </div>
                    <h1>ILLUME</h1>
                </div>
                <div className="navigation">
                    <button><a href="#" className="home">Home</a></button>
                    <button><a href="#" className="about">About</a></button>
                    <button><a href="#" className="myblog">My Blogs</a></button>
                    <div className="categories">
                        <button className="catButton">Categories</button>
                        <div className="menu" >
                            <a href="#">Cat1</a>
                            <a href="#">Cat2</a>
                            <a href="#">Cat3</a>
                            <a href="#">Cat4</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;