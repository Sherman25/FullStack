import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Header from '../../components/Header';
import AboutMe from "../../components/AboutMe";
import SideBar from "../../components/SideBar/SideBar";
import Home from '../Home/Home';
import ContactMe from '../../components/ContactMe';
import Login from '../../components/Login';
import NewPost from '../../components/NewPost';
import GetPostById from "../Posts";

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