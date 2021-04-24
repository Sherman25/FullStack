import MainSection from "./MainSection";
import SideBar from "./SideBar";
import './Home.css';
import Posts from "./Posts";
import Post from "./Post";

const Home = (props) => {
    const listItems = Posts.map((postItem) => (
        <Post key={postItem.id} post={postItem}/>
    ));
    return(
        <div class="flex-gap">
            <div class="main">
                <header>
                    <h1>This is my blog</h1>
                </header>
                {listItems}
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    );
}

export default Home;