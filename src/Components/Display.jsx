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
                            <Avatar className={classes.teal}>N</Avatar>
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
                        {/* <p>The combination of my father’s death and my personal background lit a fire in me to know more. He was admitted to the hospital on June 24, 2016, and he died on July 18. Only 24 days passed between the first sign there was a problem and his subsequent death.
                        Now, hearing that he was in end-stage cirrhosis didn’t surprise me, given his heavy drinking. What did surprise me was that he’d visited several doctors and specialists in the months before his death, and no one knew his liver was struggling either.
                        So what happened? Does end-stage liver cirrhosis really sneak up that fast? Were there other signs that would have alerted someone to his failing liver?
                        The combination of my father’s death and my personal background lit a fire in me to know more.
                      </p>
                        <p>He was admitted to the hospital on June 24, 2016, and he died on July 18. Only 24 days passed between the first sign there was a problem and his subsequent death.
                        Now, hearing that he was in end-stage cirrhosis didn’t surprise me, given his heavy drinking. What did surprise me was that he’d visited several doctors and specialists in the months before his death, and no one knew his liver was struggling either.
                        So what happened? Does end-stage liver cirrhosis really sneak up that fast? Were there other signs that would have alerted someone to his failing liver?
                        The combination of my father’s death and my personal background lit a fire in me to know more. He was admitted to the hospital on June 24, 2016, and he died on July 18. Only 24 days passed between the first sign there was a problem and his subsequent death.
                        Now, hearing that he was in end-stage cirrhosis didn’t surprise me, given his heavy drinking. What did surprise me was that he’d visited several doctors and specialists in the months before his death, and no one knew his liver was struggling either.
                        So what happened? Does end-stage liver cirrhosis really sneak up that fast? Were there other signs that would have alerted someone to his failing liver?
                      </p>
                        <p>
                            He was admitted to the hospital on June 24, 2016, and he died on July 18. Only 24 days passed between the first sign there was a problem and his subsequent death.
                            Now, hearing that he was in end-stage cirrhosis didn’t surprise me, given his heavy drinking. What did surprise me was that he’d visited several doctors and specialists in the months before his death, and no one knew his liver was struggling either.
                            So what happened? Does end-stage liver cirrhosis really sneak up that fast? Were there other signs that would have alerted someone to his failing liver?
                            The combination of my father’s death and my personal background lit a fire in me to know more. He was admitted to the hospital on June 24, 2016, and he died on July 18. Only 24 days passed between the first sign there was a problem and his subsequent death.
                            Now, hearing that he was in end-stage cirrhosis didn’t surprise me, given his heavy drinking. What did surprise me was that he’d visited several doctors and specialists in the months before his death, and no one knew his liver was struggling either.
                            So what happened? Does end-stage liver cirrhosis really sneak up that fast? Were there other signs that would have alerted someone to his failing liver?
                      </p> */}
                        <p> {props.blog.desc} </p>
                        <p> {props.blog.content} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;