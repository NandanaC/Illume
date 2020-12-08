import Header from '../Components/Header';
import Footer from "../Components/Footer";
import React from "react";
import Body from "../Components/Body1";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Home;