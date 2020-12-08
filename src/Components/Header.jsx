import React, { useState } from "react";
import "./Styles/Header.css";
import history from './history';

import blog_img from './Images/blog.jpg';
import logo_diamond from './Images/logo_diamond1.png';

function Header() {
    const [showHover, setShowHover] = useState(false);

    async function logOut() {
        const response = await fetch('http://localhost:9000/firebaseAuth/logOut',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ null: null }),
            });
        const body = await response.text();
        console.log(body);
    }

    return (
        <div className="header">
            <div className="inner_header">
                <div className="logo_container_header">
                    <div className="logo">
                        <img src={logo_diamond} alt="illume"></img>
                    </div>
                    <h1>ILLUME</h1>
                </div>
                <div className="navigation">
                    <button onClick={() => history.replace('/home')} >Home</button>
                    {/*<button><a href="#" className="about">About</a></button>*/}
                    {/* <button><a href="#" className="myblog">My Blogs</a></button> */}
                    <div className="categories">
                        <button className="catButton">Categories</button>
                        <div className="menu" >
                            <a href={"http://localhost:3000/categories/ml"}> Machine Learning </a>
                            <a href={"http://localhost:3000/categories/cc"}> Cloud Computing </a>
                            <a href={"http://localhost:3000/categories/bd"}> BigData </a>
                            <a href={"http://localhost:3000/categories/wd"}> Web development </a>
                        </div>
                    </div>
                    <button id="logOut" onClick={async () => { await logOut(); history.push('/') }}>Log Out</button>
                </div>
            </div>
        </div>
    )
}
export default Header;