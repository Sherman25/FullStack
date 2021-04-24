import React, {useState} from 'react';
import Posts from './Posts';
import Post from './Post';
import './MainSection.css';

const MainSection = (props) => {
    const listItems = Posts.map((postItem) => (
       <Post key={postItem.id} post={postItem}/>
    ));
    return(
        <div>
            <header>
                <h1>This is my blog</h1>
            </header>
            {listItems}
        </div>
    );
}

export default MainSection;