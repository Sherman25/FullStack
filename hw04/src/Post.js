import {useParams} from "react-router";
import getPostById from "./Posts";

const Post = (props) => {
    let {id} = useParams();
    const post = getPostById(id);
    return (
        <div class="post-border">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </div>
    );
}

export default Post;