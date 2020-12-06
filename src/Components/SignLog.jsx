import React from "react";
import './Styles/SignLog.css'

function SignLog() {
    return (
        <div className="formBox">
            <div className="buttonBox">
                <div id="btn"> </div>
                <button type="button" className="toggleBtn" onClick="logIn()">Log in</button>
                <button type="button" className="toggleBtn" onClick="signUp()">Sign Up</button>

            </div>
            <form id="logIn" className="inputGroup">
                <input type="text" className="inputId" placeholder="User Id"></input>
                <input type="text" className="inputPassword" placeholder="Password"></input>
                <input type="text" className="inputEmail" placeholder="Email Id"></input>
                {/*<span>Remember Password</span>
                <input type="checkbox" className="checkBox"></input>*/}
                <button type="submit" className="submitButton">Log In</button>
            </form>
            {/*<form id="signUp" className="inputGroup">
                <input type="text" className="inputId" placeholder="User Id"></input>
                <input type="text" className="inputEmail" placeholder="Email Id"></input>
                <input type="text" className="inputPassword" placeholder="Enter Password"></input>
                <span>I agree</span>
                <input type="checkbox" className="checkBox"></input>
                <button type="submit" className="submitButton">Sign Up</button>
            </form>*/}
        </div>

    );
}

export default SignLog;
  /*<script>
        var x = document.getElementById("logIn");
        var y = document.getElementById("signUp");
        var z = document.getElementById("btn");
        function signUp(){
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        }
        function logIn(){
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0px";
        }
    </script>*/