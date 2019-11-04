import {
    ALL_MATRIX,
    ALL_MATRIX_FAILURE,
    INITIAL_MATRIX,
    PIXEL_COLOR_UPDATE,
    SET_COLOR,
    MATRIX_COLOR_RESET
} from "../constants/action-types";

const initialState = {
    pixels: [],
    color: "#FFFFFF",
    defaultColor: "#FFFFFF"
};

export default (state = initialState, action) => {
    if (action.type == ALL_MATRIX) {
        return {
            ...state,
            pixels: action.result
        };
    } else if (action.type == ALL_MATRIX_FAILURE) {
        console.log("Error: ", action.error);
        return {
            ...state,
            error: action.error
        };
    } else if (action.type == PIXEL_COLOR_UPDATE) {
        const id = action.result.id;
        return {
            ...state,
            pixels: state.pixels.map(pixel =>
                pixel.id === id
                    ? { ...pixel, color: action.result.color }
                    : pixel
            )
        };
    } else if (action.type == MATRIX_COLOR_RESET) {
    } else if (action.type == SET_COLOR) {
        return {
            ...state,
            color: action.color.color
        };
    } else {
        return state;
    }
};
