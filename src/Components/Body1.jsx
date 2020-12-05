import React from "react";
import "./Styles/Body1.css";
import Card from "./Cards1"

function Body() {
    return (
        <div className="body">
            <div className="left">
                <button><a href="#" className="newPost">New Post</a></button>
            </div>
            <div className="middle">
                <div className="blogCard"> <Card /></div>
                <div className="blogCard"> <Card /></div>
                <div className="blogCard"> <Card /></div>

            </div>
            <div className="right">
            </div>
        </div>
    )
}
export default Body;