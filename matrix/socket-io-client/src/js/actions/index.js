import { ALL_MATRIX } from "../constants/action-types";
import { ALL_MATRIX_FAILURE } from "../constants/action-types";
import { SET_COLOR } from "../constants/action-types";
import { INITIAL_MATRIX } from "../constants/action-types";
import { PIXEL_COLOR_UPDATE } from "../constants/action-types";

export const initialMatrix = () => ({
    type: INITIAL_MATRIX
});

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
        dispatch(getMatrixFailure(err));
    }
};

// Action when pixel is selected
export const pixelColorUpdate = pixel => {
    return { type: PIXEL_COLOR_UPDATE, pixel };
};

// Color Picker Action
export const setColor = color => ({
    type: SET_COLOR,
    color
});

export const updatePixelColor = options => async dispatch => {
    const socket = options.socket;
    const pixel = options.pixel;
    const color = "purple";
    pixel.color = color;
    socket.emit("Pixel", { pixel });
};