import io from "socket.io-client";

const socketSendReceive = store => next => action => {
    const socket = io();
};

export default socketSendReceive;
