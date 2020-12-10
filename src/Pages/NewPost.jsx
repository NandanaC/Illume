import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewBlog from "../Components/NewBlog";
import user from '../user';

function NewPost() {

    var userData = user.userDetails;

    return (
        <div>
            <Header />
            <NewBlog user={userData} />
            <Footer />
        </div>
    )
}


export default NewPost;