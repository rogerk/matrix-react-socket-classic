const socketIOMiddleware = socket => store => next => action => {
    const { event, emit, handle, payload, ...rest } = action;

    if (!event) {
        return next(action);
    }

    const handleEvent = result =>
        store.dispatch({ type: handle, result, ...rest });

    socket.on(event, handleEvent);

    if (emit) {
        socket.emit(event, payload);
        return;
    }
};

export default socketIOMiddleware;
