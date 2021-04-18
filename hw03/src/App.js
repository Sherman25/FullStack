import './App.css';
import Post from "./Post";

const App =()=> {
      return (
            <div>
                <a href="">Home</a> | <a href="">About Me</a> | <a href="">Contact Me</a>
                <div align="right"><a href="">Login</a></div>
                <article className="row">
                    <div className="content-column">
                        <header><h1>This is my blog</h1></header>
                        <Post text={posts[0].text} days={1} author={posts[0].author}/>
                        <Post text={posts[1].text} days={2} author={posts[1].author}/>
                        <Post text={posts[2].text} days={3} author={posts[2].author}/>
                    </div>
                    <div className="sidebar-column">
                        <header><h1>Latest</h1></header>
                        <p>Blog post #1 <a href="">go to page</a></p>
                        <p>Blog post #2 <a href="">go to page</a></p>
                        <p>Blog post #3 <a href="">go to page</a></p>

                        <header><h1>Popular</h1></header>
                        <p>Blog post #3 <a href="">go to page</a></p>
                        <p>Blog post #1 <a href="">go to page</a></p>
                        <p>Blog post #2 <a href="">go to page</a></p>
                    </div>
                </article>
            </div>
        );
}

const posts = [
    { id: '1', author: 'Israel',
        text: <p>My <b>first blog post</b> is all about my <span style={{color:'red'}}>blog post</span>
            and how to write a new post in my blog, you can find it <a href="">here</a></p>},
    { id: '2', author: 'Joe', text: <p>My <b>second blog post</b> is all about my blog post.</p>},
    { id: '3', author: 'Israel', text: <p>My <b>third blog post</b> is all about my blog post.</p>},
];

export default App;
