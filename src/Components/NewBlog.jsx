import React, { useState } from "react";
import "./Styles/NewBlog.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
    root: {
        fontFamily: 'Helvetica',
        '& label.Mui-focused': {
            color: 'rgb(62, 182, 182)',
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
            borderRadius: '.8rem',
            outline: 'none',
            boxShadow: '0 .8rem .8rem rgba(54, 186, 196, 0.2)',

        },
    },
}));

async function updateDatabase(jsonData) {
    const response = await fetch('http://localhost:9000/mongoData',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });
    const body = await response.text();
    console.log(body);
}

function NewBlog() {
    const classes = useStyles();
    const [showClose, setShowClose] = useState(false);
    var data = { title: '', desc: '', content: '' };

    return (
        <div >
            <div className="newBlog" style={showClose ? { display: "none" } : { display: "flex" }} >
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="title">
                        <CssTextField required id="Title" label="Title" variant="outlined" style={{ width: "98ch" }}
                            onChange={(e) => data.title = e.target.value} />
                    </div>
                    <div className="photo">
                        <input type="file" id="photo" required></input>
                    </div>
                    <div className="shortDescription">
                        <CssTextField id="shortDes" label="Short Description" multiline rows={4} rowsMax={4} variant="outlined" margin="none" required
                            style={{ width: "98ch" }} onChange={(e) => data.desc = e.target.value} />
                    </div>
                    <div className="content">
                        <CssTextField id="Content" label="Content" multiline rows={20} variant="outlined" margin="none" required style={{ width: "98ch" }}
                            onChange={(e) => data.content = e.target.value} />
                    </div>

                    <div className="urbutton">
                        <a href="#"><button type="button" id="upload" onClick={function () { updateDatabase(data); setShowClose(true); }} >Upload</button></a>
                        <button type="reset" id="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewBlog;