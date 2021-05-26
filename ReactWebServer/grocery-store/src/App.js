import './App.css';
import './components/Header'
import Header from "./components/Header";
import ProductCard from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <Header/>
            <SearchBar/>
            <ProductCard/>
        </div>
    );
}

export default App;
