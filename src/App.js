import './App.css';
import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body1';
import Form from "./Components/DummyFb";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }

  callAPI() {
    fetch('http://localhost:9000/fetchData')
      .then(res => res.text())
      .then(res => this.setState({ data: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <div > The data is {this.state.data} </div>
        <Form />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
