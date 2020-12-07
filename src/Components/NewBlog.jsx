import React, {useState} from "react";
import "./Styles/NewBlog.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Header from './Header';
import Footer from './Footer';

const CssTextField = withStyles({
    root: {
      fontFamily: 'Helvetica',
      '& label.Mui-focused': {
        color: 'rgb(62, 182, 182)',
        fontWeight: 200,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgb(62, 182, 182)',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(62, 182, 182)',
        },
    },
        boxShadow: 'none',
    },
  })(TextField);
  
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100ch',
      fontFamily: 'arial',
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100ch',
        backgroundColor: theme.palette.common.white,
        borderRadius: '.5rem',
        outline: 'none',       
    },
  },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        borderRadius: '.5rem',
        outline: 'none',
        fontFamily: 'Helvetica',
        '& label.Mui-focused': {
        color: 'rgb(62, 182, 182)',
        fontWeight: 200,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgb(62, 182, 182)',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(62, 182, 182)',
        },
    },
    },
}));

function NewBlog() {
    const classes = useStyles();
    const [showClose, setShowClose]= useState(false);
    const [cat, setCat] = useState('');

    const handleChange = (event) => {
      setCat(event.target.value);
    };
    const [openDialog, setOpenDialog] = useState(false); 
    
    return (
      <div >
        <Header />
        <div className="newBlog" style={showClose?{display:"none"}:{display:"flex"}} >
            <div className="groupBackground">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="title">
                        
                        <CssTextField required id="Title" label="Title" variant="outlined" style = {{width: "98ch"}} 
                                      helperText="This is the title that will be displayed at the top of your blog"/>
                    </div>
                    <div className="photo">
                        <input type="file" id="photo" required></input>
                    </div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="catMenuLabel" required>Category</InputLabel>
                        <Select
                          labelId="catMenuLabel"
                          id="catMenu"
                          value={cat}
                          onChange={handleChange}
                          label="Category"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Cat1</MenuItem>
                          <MenuItem value={20}>Cat2</MenuItem>
                          <MenuItem value={30}>Cat3</MenuItem>
                          <MenuItem value={30}>Cat4</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="shortDescription">
                        <CssTextField id="shortDes" label="Short Description" multiline rows={4} rowsMax={4} variant="outlined" margin="none" required 
                                    style = {{width: "98ch"}} helperText="What's your blog about? Keep it short! :)"/>
                    </div>
                    <div className="content">
                        <CssTextField id="Content" label="Content" multiline  rows={20} variant="outlined" margin="none" required style = {{width: "98ch"}}/>
                    </div>  
                
                    <div className="urbutton">
                        <a><button type="button" id="upload" onClick={()=>{setOpenDialog(true)}}>Upload</button></a>
                        <button type="reset" id="reset">Reset</button>
                   </div>
                </form>
            </div>
          </div>
          <Dialog onClose={()=>setOpenDialog(false)} open={openDialog} disableBackdropClick='true' disableEscapeKeyDown='true'>
                <DialogTitle id="uploadConfirm">
                    Success
                </DialogTitle>
                <DialogContent>
                  <Typography gutterBottom variant="body1">Your blog has been uploaded!</Typography>
                  <Typography gutterBottom> </Typography>
                </DialogContent>
                <DialogActions>
                  <a href="#"><Button autoFocus  color="primary">
                      OK
                  </Button></a>
                </DialogActions>
          </Dialog>
          <Footer />
      </div>
    );
  }
  
  export default NewBlog;
  