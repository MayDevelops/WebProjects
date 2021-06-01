import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import r2 from "./r2";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    data:r2
})

export default createRootReducer;