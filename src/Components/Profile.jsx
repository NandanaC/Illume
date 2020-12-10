import React, { useState } from "react";
import "./Styles/Profile.css";
import Header from './Header';
import Footer from './Footer';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import Card from './Cards1';
import user from '../user';

function Profile(props) {
    const [openDelDialog, setOpenDelDialog] = useState(false);
    const [openDraw, setOpenDraw] = useState(false);

    const classes = makeStyles();
    var myBlogs = props.myblogs;
    var userData = user.userDetails;
    return (
        <div>
            <div className="body">
                <div className="left">
                    <div className="drawer">
                        <Button onClick={() => setOpenDraw(true)} id="menuIcon"><MenuTwoToneIcon /></Button>
                        <Drawer anchor='left' open={openDraw} onClose={() => setOpenDraw(false)} >
                            <div className="drawDiv">
                                <div className={classes.root} id="avatarId">
                                    <Avatar className={classes.teal} id="avatarIcon"><img src='./default-user-image.png' alt='user image' id="avatarImage"></img></Avatar>
                                </div>
                                <div className="drawName">
                                    <span id="drawName"> UserName </span>
                                </div>
                                <div className="drawEmail">
                                    {/*<i id="EmailIcon"><EmailIcon style={{color : 'rgb(62, 182, 182)'}}/></i>*/}
                                    <span id="drawEmail"> {userData.email} </span>
                                </div>
                            </div>
                        </Drawer>
                    </div>
                </div>
                <div className="middle">
                    {myBlogs.map(item =>
                        (<div className="card" key={item.BlogID}>
                            <Card key={item.BlogID} id={item.BlogID} title={item.title} desc={item.desc} day={item.BlogID.slice(0, 3)}
                                month={item.BlogID.slice(3, 6)} year={item.BlogID.slice(6, 10)} date={item.BlogID.slice(10, 12)} />
                        </div>))}
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}

export default Profile;