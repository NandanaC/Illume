import Header from '../Components/Header';
import Footer from "../Components/Footer";
import React from "react";
import Category from "../Components/Categories";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: window.location.href.slice(33, 35) }
    }

    render() {
        return (
            <div>
                <Header />
                <Category cat={this.state.url} />
                <Footer />
            </div>
        )
    }
}

export default Home;