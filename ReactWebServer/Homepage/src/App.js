import './App.css';
import './Components/Header';
import Header from "./Components/Header";
import {ButtonContainer} from "./Data/buttonContainer";
import ComicDisplay from "./Components/ComicDisplay";
import {FormEntry} from "./Components/FormEntry";
import CommentsDisplay from "./Components/CommentsDisplay";
import {CustomizedRatings} from "./Components/StarRating";
import AverageStars from "./Components/AverageStars";
function App() {
  return (
    <div className="App">
        <Header />
        <ButtonContainer />
        <ComicDisplay />
        <CustomizedRatings />
        <AverageStars />
        <FormEntry />
        <CommentsDisplay />

    </div>
  );
}

export default App;
