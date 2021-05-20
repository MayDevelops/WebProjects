import {applyMiddleware, createStore, compose} from "redux";
import {buttonReducer} from "./buttonReducer";
import {createLogicMiddleWare} from 'redux-logic';