import './App.css';
import Weather from './Weather';
import SearchBar from "./SearchBar";

function App() {
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
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
