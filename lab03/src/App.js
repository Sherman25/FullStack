import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import SearchBar from "./SearchBar";

function App() {
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    //const[searchQuery, setSearchQuery] = useState(query || '');
    //const filteredPosts = filterPosts(posts, searchQuery);
    return (
        <div className="App">
        <header className="App-header">
            <SearchBar />
            <Weather city={query}/>
        </header>
        </div>
    );
}

export default App;
