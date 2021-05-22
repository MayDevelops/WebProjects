import { createStore } from 'redux';
import { buttonReducer} from "./buttonReducer";
import { applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const buttonStore = createStore(buttonReducer, applyMiddleware(thunk));