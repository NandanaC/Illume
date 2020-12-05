import React from "react";
import "./Styles/Cards1.css"

function Cards() {
    return (
        <div className="blogPost">
            <div className="blogImg">
                <img src="./blog.jpg" alt=""></img>
            </div>
            <div className="blogInfo">
                <div className="blogDate">
                    <span>Wednesday </span>
                    <span>December 2 2020</span>
                </div>
                <h1 className="blogTitle">Title</h1>
                <p className="blogText">
                    Blog text here blog text here blog text here Blog text here blog text here blog text here
                        </p>
                <button><a href="#" className="blogReadmore">Read More</a></button>
            </div>
        </div>
    )
}
export default Cards;