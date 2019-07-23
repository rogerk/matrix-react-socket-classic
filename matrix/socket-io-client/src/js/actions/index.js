import {
    ALL_MATRIX,
    ALL_MATRIX_FAILURE,
    INITIAL_MATRIX,
    PIXEL_COLOR_UPDATE,
    RESET,
    SET_COLOR,
    UPDATE_PIXEL_COLOR
} from "../constants/action-types";

export const initialMatrix = () => {
    return {
        event: INITIAL_MATRIX,
        emit: true,
        handle: ALL_MATRIX
    };
};

export const allMatrix = data => {
    return { type: ALL_MATRIX, data };
};

export const allMatrixFailure = err => ({
    type: ALL_MATRIX_FAILURE,
    err
});

export const getMatrix = options => async dispatch => {
    dispatch(initialMatrix());

    const { socket } = options;
    delete options.socket;

    try {
        socket.emit("InitialMatrix", options);
    } catch (err) {
        dispatch(allMatrixFailure(err));
    }
};

// Action when pixel is selected
export const pixelColorUpdate = pixel => {
    return { type: PIXEL_COLOR_UPDATE, pixel };
};

export const resetAll = reset => {
    return { type: RESET, reset };
};

// Color Picker Action
export const setColor = color => ({
    type: SET_COLOR,
    color
});

export const updatePixelColor = payload => {
    return {
        event: UPDATE_PIXEL_COLOR,
        emit: true,
        handle: PIXEL_COLOR_UPDATE,
        payload: payload
    };
};

export const resetMatrix = options => async dispatch => {
    const { socket } = options;
    const { color } = options;
    socket.emit("Reset", { color: color });
};
