import React from "react";
import "./Post.css"

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            days: props.days,
            author: props.author,
        }
    }

    render(){
        return(
            <div className="post">
                <h3>Blog post #1</h3>
                {this.state.text}
                <div className="box"></div>
                <p className="note">Posted {this.state.days} days ago by {this.state.author}</p>
            </div>
        );
    }
}

export default Post;