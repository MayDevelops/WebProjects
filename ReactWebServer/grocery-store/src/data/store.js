import {compose, createStore} from 'redux';
import rootReducer from "./reducer";
import { applyMiddleware} from "redux";
import thunk from "redux-thunk";


import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createBrowserHistory} from "history";
import createRootReducer from "./reducer";
import {routerMiddleware} from "connected-react-router";



//export const store = createStore(reducer, applyMiddleware(thunk));
//
//
// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     whitelist: ['cart']
// };
// const pReducer = persistReducer(persistConfig, rootReducer);
// const middleware = applyMiddleware(thunk, logger);
// const store = createStore(pReducer, middleware);
// const persistor = persistStore(store);
// export { persistor, store };


export const history = createBrowserHistory();



export default function configureStore(preloadedState) {
    const composeEnhancer = compose
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    )

    return store
}