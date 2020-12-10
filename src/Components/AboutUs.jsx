import React from "react";
import blog from './Images/blog.jpg';
import des from './Images/design.png';
import ui from './Images/ui.png';
import security from './Images/security.png';
import social from './Images/social.png';
import './Styles/About.css';

import history from './history';
import user from '../user';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.logInWithEmailAndPassword = this.logInWithEmailAndPassword.bind(this);
        this.signUpWithEmailAndPassword = this.signUpWithEmailAndPassword.bind(this);
        this.state = { txtEmail: '', txtPass: '', user: {} };
    }

    async logInWithEmailAndPassword(email, pass) {
        const response = await fetch('http://localhost:9000/firebaseAuth/logIn',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, pass: pass }),
            });
        const body = await response.json();
        if (String(body['bool']) !== 'true') { alert(body['bool']); this.setState({ user: null }); return false }
        else { console.log('Logged in successfully!'); this.setState({ user: body['user'] }); return true; }
    }

    async signUpWithEmailAndPassword(email, pass) {
        const response = await fetch('http://localhost:9000/firebaseAuth/signUp',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, pass: pass }),
            });
        const body = await response.json();
        if (String(body['bool']) !== 'true') { alert(body['bool']); this.setState({ user: null }); return false; }
        else { console.log('Signed up successfully!'); this.setState({ user: body['user'] }); return true; }
    }

    async onLogIn(event) {
        event.preventDefault();
        if (await this.logInWithEmailAndPassword(this.state.txtEmail, this.state.txtPass)) {
            user.userDetails = this.state.user;
            setTimeout(history.push({ pathname: '/home', state: { user: this.state.user } }), 1500);
        }

    }

    async onSignUp(event) {
        event.preventDefault();
        if (await this.signUpWithEmailAndPassword(this.state.txtEmail, this.state.txtPass)) {
            user.userDetails = this.state.user;
            setTimeout(history.push({ pathname: '/home', state: { user: this.state.user } }), 1500);
        }

    }

    render() {
        return (
            <div className="App">
                <div className="Header">
                </div>
                <div className="about_title">
                    <div className="head">What is ILLUME?</div>
                    <div className="headImage">
                        <img src={blog} height="450px" width="80%"></img>
                    </div>
                    <div className="headPara">
                        A blogging website for all PESU students. Write blogs and showcase your skills in the various fields!!
                </div>
                </div>
                <div className="authenticate">
                    <div className="signIn">
                        New to Illume ? Sign Up
                </div>
                    <div className="signInDetails">
                        <form >
                            <div className="container">
                                <label for="email"><b>Email</b></label>
                                <input type="email" placeholder="Enter Email" name="em" required
                                    onChange={(e) => this.setState({ txtEmail: e.target.value })}
                                />

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required
                                    onChange={(e) => this.setState({ txtPass: e.target.value })} />

                                <label for="srn"><b>SRN</b></label>
                                <input type="text" placeholder="Enter SRN" name="sr" />

                                <button type="submit" id='submit'
                                    onClick={(event) => { this.onSignUp(event) }}
                                >SignUp</button>
                            </div>
                        </form>
                    </div>
                    <div><b>----------------------- OR -----------------------</b></div>
                    <div className="signIn">
                        Log In
            </div>
                    <form >
                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="em" required
                            onChange={(e) => this.setState({ txtEmail: e.target.value })} />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required
                            onChange={(e) => this.setState({ txtPass: e.target.value })} />

                        <button type="submit" id="login"
                            onClick={(event) => { this.onLogIn(event) }}
                        >Login</button>
                    </form>
                </div>
                <div className="design">
                    <div className="designTitle">Design</div>
                    <div className="designContent">A modern design with personal touch . A smart display of the website content all across the pages.
                </div>
                </div>
                <div className="designImage">
                    <img src={des} width="100%" height="100%"></img>
                </div>
                <div className="ui">
                    <div className="uiTitle">User Interface</div>
                    <div className="uiContent">A good user interface providing a "user-friendly" experience, allowing the user to interact with the software in a natural and intuitive way.
                </div>
                </div>
                <div className="uiImage"></div>
                <div className="ui">
                    <div className="uiTitle">User Interface</div>
                    <div className="uiContent">A good user interface providing a "user-friendly" experience, allowing the user to interact with the software in a natural and intuitive way.
                </div>
                </div>
                <div className="uiImage">
                    <img src={ui} width="100%" height="100%"></img>
                </div>
                <div className="sec">
                    <div className="secTitle">Security and Spam Protection</div>
                    <div className="secContent">Secure login using Firebase Authentication.
                </div>
                </div>
                <div className="secImage">
                    <img src={security} width="100%" height="100%"></img>
                </div>
                <div className="socImage"></div>
                <div className="soc">
                    <div className="socTitle">Social media & email subscription(Coming Soon)</div>
                    <div className="socContent">Share your content to your favourite social media sites
                </div>
                </div>
                <div className="socImage">
                    <img src={social} width="100%" height="100%"></img>
                </div>
                <div className="quotes">-"Your ultimate Consumers are your users , not search engines"</div>
            </div>
        );
    }
}

export default AboutUs;