import About from "../Components/AboutUs";
import AboutHeader from '../Components/AboutHeader';
import Footer from "../Components/Footer";
import React from "react";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AboutHeader />
                <About />
                <Footer />
            </div>
        )
    }
}

export default AboutUs;