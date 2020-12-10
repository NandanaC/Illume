import Profile from '../Components/Profile';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";
import { useLocation } from 'react-router-dom';

function MyBlogs() {

    const location = useLocation();

    return (
        <div>
            <Header />
            <Profile myblogs={location.state.blogs} />
            <Footer />
        </div>
    )
}


export default MyBlogs;