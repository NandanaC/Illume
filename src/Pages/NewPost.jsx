import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewBlog from "../Components/NewBlog";

class NewPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <NewBlog />
                <Footer />
            </div>
        )
    }
}

export default NewPost;