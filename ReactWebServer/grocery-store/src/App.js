import './App.css';
import './components/Header'
import Header from "./components/Header";
import Home from "./components/Home";
import {Router} from "react-router";
import {createBrowserHistory} from "history";
import {Route} from "react-router-dom";
import {Browse} from "./components/Browse";
import Cart from "./components/Cart";
import {ConnectedRouter} from "connected-react-router";
import routes from './routes'
import PropTypes from 'prop-types'
const history = createBrowserHistory();

const App = ({history}) => {
    return (
        // // <Router history={history}>
        // <div className="App">
        //     <Header/>
        //     {/*<Route exact path="/" component={Home} />*/}
        //     {/*<Route path="/browse" component={Browse} />*/}
        //     {/*<Route path="/cart" component={Cart} />*/}
        // </div>
        // // </Router>
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object,
}

export default App;
