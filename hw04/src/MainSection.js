import React, {useState} from 'react';
import getAllPosts from './Posts';
import Post from './Post';
import './MainSection.css';

function mainSection() {
    return(
        <div>
            <header>
                <h1>This is my blog</h1>
            </header>
            <getAllPosts />
        </div>
    );
}

export default mainSection;