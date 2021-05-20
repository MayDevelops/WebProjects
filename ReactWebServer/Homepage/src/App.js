import './App.css';
import './Components/Header';
import Header from "./Components/Header";
import {ButtonContainer} from "./Data/buttonContainer";
import ComicFetch from "./Components/ComicFetch";

function App() {
    return (
        <div className="App">
            <Header/>
            <ButtonContainer/>
            <ComicFetch/>
        </div>
    );
}

export default App;
