import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./data/store";
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import {history} from "./data/store";

// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App/>
//         </PersistGate>
//     </Provider>,
//     document.getElementById('root')
// );

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
    <Provider store={store}>
        <App history ={history} />
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
