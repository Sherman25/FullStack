import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Header from './Header';
import AboutMe from "./AboutMe";
import SideBar from "./SideBar";
import Home from './Home';
import ContactMe from './ContactMe';
import Login from './Login';
import NewPost from './NewPost';
import GetPostById from "./Posts";

function App () {
    return (
        <Router>
            <Header />
            <div>
                <Switch>
                    <Route path="/about">
                        <AboutMe />
                    </Route>
                    <Route path="/contact">
                        <ContactMe />
                    </Route>
                    <Route path="/new_post">
                        <NewPost />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/post/:id">
                        <GetPostById />
                        <SideBar />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;