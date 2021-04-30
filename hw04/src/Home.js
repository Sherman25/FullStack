import MainSection from "./MainSection";
import SideBar from "./SideBar";
import './Home.css';
import {getAllPosts} from './Posts';
//import Posts from "./Posts";
//import Post from "./Post";

const Home = (props) => {
    const posts = getAllPosts();
    return(
        <div class="flex-gap">
            <div class="main">
                <header>
                    <h1>This is my blog</h1>
                </header>
                {posts}
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    );
}

export default Home;