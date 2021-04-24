/*
Keeping an array of posts which will be displayed in blog.
The component used by used by the MainSection and Post components.
 */

const Posts = [
    {id: 1, title: "Blog post #1", content: <p>My <b>first blog post</b> is all about my <span style={{color:'red'}}>
            blog post</span> and how to write a new post in my blog, you can find it <a href="/post1">here</a></p>,
            published: "", author: ""},
    {id: 2, title: "Blog post #2", content: <p>My <b>second blog post</b> is all about my blog post.</p>,
            published: "", author: ""},
    {id: 3, title: "Blog post #3", content: <p>My <b>third blog post</b> is all about my blog post.</p>, published: "",
            author: ""}
]

export default Posts;