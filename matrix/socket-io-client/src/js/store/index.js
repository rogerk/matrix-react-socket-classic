import socketSendReceive from "../middleware/socketSendReceive";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Reducers from "../reducers";

const store = createStore(Reducers, applyMiddleware(socketSendReceive, thunk));

export default store;
