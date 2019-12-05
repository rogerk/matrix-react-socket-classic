import {
    ALL_MATRIX,
    MATRIX_FAILURE,
    PIXEL_COLOR_UPDATE,
    SET_COLOR,
    MATRIX_COLOR_RESET
} from "../constants/event-types";

const initialState = {
    pixels: [],
    color: "#FFFFFF",
    defaultColor: "#FFFFFF"
};

export default (state = initialState, action) => {
    if (action.type == ALL_MATRIX) {
        return {
            ...state,
            pixels: action.result,
            error: undefined
        };
    } else if (action.type == MATRIX_FAILURE) {
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
            ),
            error: undefined
        };
    } else if (action.type == MATRIX_COLOR_RESET) {
        return {
            ...state,
            pixels: action.result,
            error: undefined
        };
    } else if (action.type == SET_COLOR) {
        return {
            ...state,
            color: action.color.color
        };
    } else {
        return state;
    }
};
