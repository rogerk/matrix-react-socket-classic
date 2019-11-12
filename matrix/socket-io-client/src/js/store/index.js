import socketIO from "socket.io-client";
import socketIOMiddleware from "../middleware/socketIOMiddleware";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Reducers from "../reducers";

const middlewares = [thunk];
const io = socketIO.connect("http://127.0.0.1:4001");
middlewares.push(socketIOMiddleware(io));
const store = createStore(Reducers, applyMiddleware(...middlewares));

export default store;
