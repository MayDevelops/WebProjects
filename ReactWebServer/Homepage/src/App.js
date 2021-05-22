import './App.css';
import './Components/Header';
import Header from "./Components/Header";
import {ButtonContainer} from "./Data/buttonContainer";
import ComicDisplay from "./Components/ComicDisplay";
import {FormEntry} from "./Components/FormEntry";
import CommentsDisplay from "./Components/CommentsDisplay";
import {CustomizedRatings} from "./Components/StarRating";
import AverageStars from "./Components/AverageStars";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <ButtonContainer/>
            <ComicDisplay/>
            <CustomizedRatings/>
            <AverageStars/>
            <FormEntry/>
            <CommentsDisplay/>
            <Footer/>
        </div>
    );
}

export default App;
