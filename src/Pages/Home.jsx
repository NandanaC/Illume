import Header from '../Components/Header';
import Footer from "../Components/Footer";
import React from "react";
import Body from "../Components/Body1";
import { useLocation } from "react-router-dom";
import user from '../user';

function Home() {
    return (
        <div>
            <Header />
            <Body user={user.userDetails} />
            <Footer />
        </div>
    )

}

export default Home;