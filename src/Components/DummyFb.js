import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.logInWithEmailAndPassword = this.logInWithEmailAndPassword.bind(this);
        this.signUpWithEmailAndPassword = this.signUpWithEmailAndPassword.bind(this);
        this.logOut = this.logOut.bind(this);
        this.state = { txtEmail: document.getElementById('txtEmail'), txtPass: '' }
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
        const body = await response.text();
        console.log(body);
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
        const body = await response.text();
        console.log(body);
    }

    async logOut() {
        const response = await fetch('http://localhost:9000/firebaseAuth/logOut',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ null: null }),
            });
        const body = await response.text();
        console.log(body);
    }

    render() {
        return (
            <div>
                <input type="email" id="txtEmail" placeholder="Email" onChange={(e) => this.setState({ txtEmail: e.target.value })} style={{ margin: 10 + 'px' }} />
                <input type="password" id="txtPass" placeholder="Password" onChange={(e) => this.setState({ txtPass: e.target.value })} style={{ margin: 10 + 'px' }} />
                <button id='logIn' onClick={() => this.logInWithEmailAndPassword(this.state.txtEmail, this.state.txtPass)}> Log In </button>
                <button id='logOut' onClick={() => this.logOut()}> Log Out </button>
                <button id='signUp' onClick={() => this.signUpWithEmailAndPassword(this.state.txtEmail, this.state.txtPass)}> Sign Up </button>
            </div>
        )
    }
}
export default Form;