import socketSendReceive from "../middleware/socketSendReceive";
import { createStore, applyMiddleware } from "redux";
import Reducers from "../reducers";

const store = createStore(Reducers, applyMiddleware(socketSendReceive));

export default store;
