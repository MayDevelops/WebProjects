import { createStore } from 'redux';
import { countReducer } from './reducer';
import { buttonReducer} from "./buttonReducer";

export const store = createStore(countReducer);
export const buttonStore = createStore(buttonReducer);