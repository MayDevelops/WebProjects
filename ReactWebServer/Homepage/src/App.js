import './App.css';
import './Components/Header';
import Header from "./Components/Header";
import {ButtonContainer} from "./Data/buttonContainer";
import ComicDisplay from "./Components/ComicDisplay";
import {FormEntry} from "./Components/FormEntry";

function App() {
  return (
    <div className="App">
        <Header />
        <ButtonContainer />
        <ComicDisplay />
        <FormEntry />
    </div>
  );
}

export default App;
