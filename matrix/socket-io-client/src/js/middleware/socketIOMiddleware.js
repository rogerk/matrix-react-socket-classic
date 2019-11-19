import { ALL_MATRIX_FAILURE } from "../constants/action-types";

const socketIOMiddleware = socket => store => next => action => {
    const { event, emit, handle, errorHandle, payload, ...rest } = action;

    if (!event) {
        return next(action);
    }

    socket.on("connect_error", () => {
        store.dispatch({
            type: errorHandle,
            error: "Socket Connection Error"
        });
    });

    const handleEvent = result =>
        store.dispatch({ type: handle, result, ...rest });

    socket.on(event, handleEvent);

    if (emit) {
        socket.emit(event, payload);
        return;
    }
};

export default socketIOMiddleware;
