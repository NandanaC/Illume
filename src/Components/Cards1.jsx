import React from "react";
import "./Styles/Cards1.css"
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup  from "@material-ui/core/FormGroup";

function Cards(){ 
    return(
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
                        <FormGroup>
                        <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                            label="Like" />
                        </FormGroup>
                        <div className="blogReadmore">
                            <a href="#"><button>Read More</button></a>
                        </div>
                    </div>
            </div>
    )
}
    export default Cards;