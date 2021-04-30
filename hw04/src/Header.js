import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

function Header() {
    return(
            <div class="flex-gap">
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
            </div>
    );
}

export default Header;