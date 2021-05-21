import './App.css';
import './Components/Header';
import Header from "./Components/Header";
import {ButtonContainer} from "./Data/buttonContainer";
import ComicDisplay from "./Components/ComicDisplay";

function App() {
  return (
    <div className="App">
        <Header />
        <ButtonContainer />
        <ComicDisplay />
    </div>
  );
}

export default App;
