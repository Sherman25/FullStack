const Post = (props) => {
    const {post} = props;
    return (
        <div class="post-border">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;