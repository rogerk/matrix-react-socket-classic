import {
    ALL_MATRIX,
    ALL_MATRIX_FAILURE,
    INITIAL_MATRIX,
    MATRIX_COLOR_RESET,
    PIXEL_COLOR_UPDATE,
    RESET_MATRIX_COLOR,
    SET_COLOR,
    UPDATE_PIXEL_COLOR
} from "../constants/event-types";

export const initialMatrix = () => {
    return {
        event: INITIAL_MATRIX,
        emit: true,
        handle: ALL_MATRIX,
        errorHandle: ALL_MATRIX_FAILURE
    };
};

export const allMatrixFailure = err => ({
    type: ALL_MATRIX_FAILURE,
    err
});

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

export const resetMatrixColor = payload => {
    return {
        event: RESET_MATRIX_COLOR,
        emit: true,
        handle: MATRIX_COLOR_RESET,
        payload: payload
    };
};
