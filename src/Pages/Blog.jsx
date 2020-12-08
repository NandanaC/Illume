import Header from '../Components/Header';
import Footer from "../Components/Footer";
import Display from "../Components/Display";
import React from "react";
import { useLocation } from "react-router-dom";


function Blog() {

    const location = useLocation();
    return (
        <div>
            <Header />
            <Display blog = {location.state.matter}/>
            <Footer />
        </div>
    )
}


export default Blog;