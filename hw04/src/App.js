import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Header from './Header';
import MainSection from "./MainSection";
import AboutMe from "./AboutMe";
import SideBar from "./SideBar";
import Home from './Home';
import ContactMe from './ContactMe';
import Login from './Login';
import Posts from './Posts';
import Post from './Post';
import NewPost from './NewPost';

function App () {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                    <li>
                        <Link to="/new_post">New Post Page</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
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
                        <Post />
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