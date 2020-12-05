import './App.css';
import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body1';
import Form from "./Components/DummyFb";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      func: function () { }
    };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
  }

  componentDidMount() {
    //this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Form />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
