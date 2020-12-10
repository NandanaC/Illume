import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

import About from '../Pages/About';
import Home from '../Pages/Home';
import NewBlog from "../Pages/NewPost";
import Blog from "../Pages/Blog";
import Category from "../Pages/Category";
import Profile from "../Pages/MyBlogs";

class Routes extends Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/" component={About} exact />
                    <Route path="/home" component={Home} />
                    <Route path="/new-blog" component={NewBlog} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/user" component={Profile} />
                    <Route path="/categories/ml" component={Category} />
                    <Route path="/categories/cc" component={Category} />
                    <Route path="/categories/bd" component={Category} />
                    <Route path="/categories/wd" component={Category} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;