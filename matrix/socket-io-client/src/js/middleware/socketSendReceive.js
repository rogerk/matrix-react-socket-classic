import io from "socket.io-client";
import * as Actions from "../actions";

const socketSendReceive = store => next => action => {
    const socket = io("http://127.0.0.1:4001");

    const { event, emit, handle, payload, ...rest } = action;

    if (!event) {
        return next(action);
    }

    let handleEvent = handle;
    if (typeof handleEvent === "string") {
        handleEvent = result =>
            store.dispatch({ type: handle, result, ...rest });
    }
    socket.on(event, handleEvent);

    if (emit) {
        socket.emit(event, payload);
        return;
    }
};

export default socketSendReceive;
