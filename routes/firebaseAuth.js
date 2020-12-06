var express = require('express');
var app = express();
var firebase = require('firebase');
var fs = require('fs');

const config = {
    apiKey: "AIzaSyAX1jk7VgN0JEluxw9vNb7Q9Wl7Nr_UROo",
    authDomain: "illume-8e3bc.firebaseapp.com",
    databaseURL: "https://illume-8e3bc.firebaseio.com",
    projectId: "illume-8e3bc",
    storageBucket: "illume-8e3bc.appspot.com",
    messagingSenderId: "788473290990",
    appId: "1:788473290990:web:ab07e956dce54837c093ff",
    measurementId: "G-Z1Z8F9CMRW"
};

firebase.default.initializeApp(config);
const auth = firebase.auth();

auth.onAuthStateChanged(function (firebaseUser) {
    if (firebaseUser) {
        console.log('Signed in!');
        fs.writeFileSync("./routes/userData.txt", auth.currentUser.uid,
            function (err) {
                if (err) throw err;
                console.log("File written successfully!");
            }
        );
    }
    else {
        fs.writeFileSync("./routes/userData.txt", '', function (err) {
            if (err) throw err;
            console.log("File contents cleared");
        })
        console.log('Signed out!');
    }
});

async function validateLogIn(email, pass) {
    var valid = true;
    await auth.signInWithEmailAndPassword(email, pass)
        .then((user) => { console.log('Logged in as ' + auth.currentUser.email) })
        .catch((error) => {
            var errMessage = error.message;
            console.log('ERR-MSG: ' + errMessage);
            if (error) valid = false;
        });
    return valid;
}

async function signUp(email, pass) {
    var success = true;
    await auth.createUserWithEmailAndPassword(email, pass)
        .then((user) => { console.log('Logged in as ' + auth.currentUser.email) })
        .catch((error) => {
            var errMessage = error.message;
            console.log('ERR-MSG: ' + errMessage);
            if (error) success = false;
        });
    return success;
}

async function logOut() {
    var success = true;
    await auth.signOut()
        .then(console.log('Logged out'))
        .catch((error) => {
            var errMessage = error.message;
            console.log('ERR-MSG: ' + errMessage);
            success = false;
        });
    return success;
}

app.post('/logIn', async function (req, res) {
    var validate = await validateLogIn(req.body.email, req.body.pass);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    if (validate) res.send('Log In Successfull! :)');
    else res.send('Log In Unsuccessfull :( ');
});

app.post('/signUp', async function (req, res) {
    var success = await signUp(req.body.email, req.body.pass);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    if (success) res.send('Sign Up Successfull! :)');
    else res.send('Sign Up Unsuccessfull :( ');
});

app.post('/logOut', async function (req, res) {
    var success = await logOut();
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    if (success) res.send('Log Out Successfull! :)');
    else res.send('Log Out Unsuccessfull :( ');
});

app.post('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send('Received request from port 3000');
});


module.exports = app;