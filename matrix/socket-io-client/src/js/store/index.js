import socketIO from "socket.io-client";
import socketIOMiddleware from "../middleware/socketIOMiddleware";
import { createStore, applyMiddleware } from "redux";
import Reducers from "../reducers";

const io = socketIO.connect("http://127.0.0.1:4001");
const store = createStore(Reducers, applyMiddleware(socketIOMiddleware(io)));

export default store;
