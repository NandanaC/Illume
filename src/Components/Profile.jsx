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

function Profile() {
    const [openDelDialog, setOpenDelDialog] = useState(false);
    const [openDraw, setOpenDraw] = useState(false);
    const classes = makeStyles();

    return (
        <div>
            <Header />
            <div className="drawer">
                <Button onClick={() => setOpenDraw(true)} id="menuIcon"><MenuTwoToneIcon /></Button>
                <Drawer anchor='left' open={openDraw} onClose={() => setOpenDraw(false)} >
                    <div className="drawDiv">
                        <div className={classes.root} id="avatarId">
                            <Avatar className={classes.teal} id="avatarIcon"><img src='./default-user-image.png' alt='user image' id="avatarImage"></img></Avatar>
                        </div>
                        <div className="drawName">
                            <span id="drawName">UserName</span>
                        </div>
                        <div className="drawEmail">
                            {/*<i id="EmailIcon"><EmailIcon style={{color : 'rgb(62, 182, 182)'}}/></i>*/}
                            <span id="drawEmail">username@gmail.com</span>
                        </div>
                    </div>
                </Drawer>
            </div>
            <div className="profileContainer">
                <div className="profileCard">
                    <div className="card">
                        <img src='./website.jpg' alt='image'></img>
                        <div className="cardPanel">
                            <span className="cardDate">
                                7th December, 2020
                            </span>
                            <p id="shortDesc">
                                Have you ever said words to the effect of If only I knew then what I know now?
                                You’re not the first person to express such thoughts, and you certainly won’t be the last.
                            </p>
                            <span className="breaker"></span>
                            <h3 id="heading">
                                Life Lessons Learned in My 40’s That I Wish I Could Tell My 20-Year Old Self
                            </h3>
                            <a href='#' id="EditIcon" ><EditIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                            <a id="DeleteIcon" onClick={() => { setOpenDelDialog(true) }}><DeleteIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                            <a href='#' id="ArrowRightAltIcon"><ArrowRightAltIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                        </div>
                    </div>

                    <div className="card">
                        <img src='./website.jpg' alt='image'></img>
                        <div className="cardPanel">
                            <span className="cardDate">
                                7th December, 2020
                            </span>
                            <p id="shortDesc">
                                Have you ever said words to the effect of If only I knew then what I know now?
                                You’re not the first person to express such thoughts, and you certainly won’t be the last.
                            </p>
                            <span className="breaker"></span>
                            <h3 id="heading">
                                Life Lessons Learned in My 40’s That I Wish I Could Tell My 20-Year Old Self
                            </h3>
                            <a href='#' id="EditIcon" ><EditIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                            <a id="DeleteIcon" onClick={() => { setOpenDelDialog(true) }}><DeleteIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                            <a href='#' id="ArrowRightAltIcon"><ArrowRightAltIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>

                        </div>
                    </div>

                    <div className="card">
                        <img src='./website.jpg' alt='image'></img>
                        <div className="cardPanel">
                            <span className="cardDate">
                                7th December, 2020
                            </span>
                            <p id="shortDesc">
                                Have you ever said words to the effect of If only I knew then what I know now?
                                You’re not the first person to express such thoughts, and you certainly won’t be the last.
                            </p>
                            <span className="breaker"></span>
                            <h3 id="heading">
                                Life Lessons Learned in My 40’s That I Wish I Could Tell My 20-Year Old Self
                            </h3 >
                            <a href='#' id="EditIcon" ><EditIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                            <a id="DeleteIcon" onClick={() => { setOpenDelDialog(true) }}><DeleteIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                            <a href='#' id="ArrowRightAltIcon"><ArrowRightAltIcon style={{ color: 'rgb(62, 182, 182)' }} /></a>
                        </div>
                    </div>
                </div>

                <a href="#!" className="allbtn">View all</a>

                <Dialog onClose={() => setOpenDelDialog(false)} open={openDelDialog} disableBackdropClick='true' disableEscapeKeyDown='true'>
                    <DialogTitle id="delConfirm">
                        Delete
                        </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom variant="body1">Are you sure you want to delete this post?</Typography>
                        <Typography gutterBottom> </Typography>
                    </DialogContent>
                    <DialogActions>
                        <a><Button autoFocus color="primary" onClick={() => setOpenDelDialog(false)}>
                            Cancel
                            </Button></a>
                        <a href="#"><Button autoFocus color="primary">
                            Yes
                            </Button></a>

                    </DialogActions>
                </Dialog>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;