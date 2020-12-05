import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body1';
import NewBlog from './Components/NewBlog';
import SignLog from './Components/SignLog';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/*<SignLog />*/}
      <Footer />
      {/* <NewBlog />  */}
    </div>
  );
}

export default App;
