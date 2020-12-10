import React, { useState } from "react";
import "./Styles/Cards1.css"
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from "@material-ui/core/FormGroup";
import history from './history';

import blog_img from './Images/blog.jpg';
import logo_diamond from './Images/logo_diamond1.png';

function Cards(props) {

    var blog;
    async function fetchBlog(blogId) {
        await fetch('http://localhost:9000/fetchData/blog',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ BlogID: blogId }),
            })
            .then(res => res.json())
            .then(res => { blog = res });
    }

    function readMore() {
        history.push({
            pathname: '/blog',
            search: '?query=' + blog.BlogID,
            state: { matter: blog }
        })
    }

    return (
        <div className="blogPost">
            <div className="blogImg">
                <img src={blog_img} alt=""></img>
            </div>
            <div className="blogInfo">
                <div className="blogDate">
                    <span>{props.day} </span>
                    <span>{props.month} {props.date} {props.year}</span>
                </div>
                <h1 className="blogTitle">{props.title}</h1>
                <p className="blogText">
                    {props.desc}
                </p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        label="Like" />
                </FormGroup>
                <div className="blogReadmore">
                    <button onClick={async () => {
                        await fetchBlog(props.id);
                        console.log(blog);
                        readMore();
                    }}>Read More</button>
                </div>
            </div>
        </div>
    )
}
export default Cards;