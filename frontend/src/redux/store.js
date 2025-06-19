import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import  authReducer  from "./reducer.js";

const store = createStore(authReducer, applyMiddleware(thunk));
window.__REDUX_STORE__ = store;
export default store;