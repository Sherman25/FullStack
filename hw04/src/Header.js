import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import AboutMe from "./AboutMe";

function Header() {

    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/about">
                        <AboutMe />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Header;