import './App.css';
import './Components/Header';
import Header from "./Components/Header";
import ButtonSegment from "./Components/ButtonSegment";
import ComicDisplay from "./Components/ComicDisplay";

function App() {
  return (
    <div className="App">
        <Header />
        <ButtonSegment />
        <ComicDisplay />
    </div>
  );
}

export default App;
