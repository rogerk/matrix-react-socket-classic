import io from "socket.io-client";

const socketSendReceive = store => next => action => {
    const socket = io();
    next(action);
};

export default socketSendReceive;
