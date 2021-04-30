import React from 'react';
import './SideBar.css';

function SideBar() {
    return(
        <div className="sidebar-column">
            <header><h1>Latest</h1></header>
            <p>Blog post #1 <a href="/post/1">go to page</a></p>
            <p>Blog post #2 <a href="/post/2">go to page</a></p>
            <p>Blog post #3 <a href="/post/3">go to page</a></p>
            <header><h1>Popular</h1></header>
            <p>Blog post #3 <a href="/post/3">go to page</a></p>
            <p>Blog post #1 <a href="/post/1">go to page</a></p>
            <p>Blog post #2 <a href="/post/2">go to page</a></p>
        </div>
    );
}

export default SideBar;