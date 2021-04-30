import SideBar from "../../components/SideBar/SideBar";
import './Home.css';
import {getAllPosts} from '../Posts';

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