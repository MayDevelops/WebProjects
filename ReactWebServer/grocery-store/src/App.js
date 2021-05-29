import './App.css';
import './components/Header'
import Header from "./components/Header";
import Home from "./components/Home";
import {Router} from "react-router";
import {createBrowserHistory} from "history";
import {Route} from "react-router-dom";
import {Browse} from "./components/Browse";
import Cart from "./components/Cart";
const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/cart" component={Cart} />
        </div>
        </Router>
    );
}

export default App;
