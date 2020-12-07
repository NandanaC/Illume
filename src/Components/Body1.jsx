import React, {useState} from "react";
import "./Styles/Body1.css";
import Card from "./Cards1";
import NewBlog from './NewBlog';
{/*import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    dialogPaper: {
        height : '95vh',
        maxWidth: 'none',
        width:'80%',
    },
    appbar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));
const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref} {...props} />;

});
export default function FullScreenDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };*/}
function Body() {
    return(
        <div className="body" /*style={open?{filter:'blur(2px)'}:{filter:'none'}}*/>
            <div className="left">
            <a href="#" className="newPost"><button type='button' onClick={()=><NewBlog />}>New Post</button></a>            
            </div>
            <div className="middle">
                <div className="blogCard"> <Card /></div>
                <div className="blogCard"> <Card /></div>
                <div className="blogCard"> <Card /></div>
                <div className="loadMore">
                    <a href="#"><button type='button'>Load More</button></a>
                </div>

            </div>
            <div className="right">

            </div>
                {/*<Dialog className= "dialogClass" fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar} style={{ backgroundColor: '#18181a'}}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                New Blog
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <NewBlog />
                </Dialog>*/}
            </div>
    );
}
export default Body;