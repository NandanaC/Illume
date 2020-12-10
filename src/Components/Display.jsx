import React from 'react';
import './Styles/Display.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { teal } from '@material-ui/core/colors';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from "@material-ui/core/FormGroup";
import PersonIcon from "@material-ui/icons/Person";

function Display(props) {
    const dispStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        teal: {
            color: theme.palette.getContrastText(teal[500]),
            backgroundColor: teal[500],
        },
    }));
    const classes = dispStyles();

    return (
        <div>
            <div className="disp">
                <div className="dispLeft">
                    <div className="checkedH" >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Like" />
                        </FormGroup>
                    </div>
                </div>
                <div className="dispMiddle">
                    <div className="dispTitle">{props.blog.title}</div>
                    <div className="dispAvatar">
                        <div className={classes.root}>
                            <Avatar className={classes.teal}> <PersonIcon /> </Avatar>
                        </div>
                        <div className="userName">
                            <span>
                                userName
                                </span>
                        </div>
                    </div>
                    <div className="dispImg">
                        <img src='./website.jpg' alt='img' id="dispImage"></img>
                    </div>
                    <div className="dispContent">
                        <p> {props.blog.desc} </p>
                        <br />
                        <p> {props.blog.content} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;