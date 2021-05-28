import './App.css';
import './components/Header'
import Header from "./components/Header";
import ProductCard from "./components/ProductGrid";
import {SearchBar} from "./components/SearchBar";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
