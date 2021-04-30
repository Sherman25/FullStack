import './Post.css';

const Post = (props) => {

    const {post} = props;
    return (
        <div class="post-border">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </div>
    );
}

export default Post;