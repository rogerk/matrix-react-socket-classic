import {
    ALL_MATRIX,
    ALL_MATRIX_FAILURE,
    INITIAL_MATRIX,
    PIXEL_COLOR_UPDATE,
    SET_COLOR
} from "../constants/action-types";

import store from "../store";

const initialState = {
    pixels: [],
    color: "#FFFFFF"
};

export default (state = initialState, action) => {
    if (action.type === INITIAL_MATRIX) {
        return {
            ...state
        };
    } else if (action.type == ALL_MATRIX) {
        return {
            ...state,
            pixels: action.data
        };
    } else if (action.type == ALL_MATRIX_FAILURE) {
        console.log("Error: ", action.error);
        return {
            ...state,
            error: action.error
        };
    } else if (action.type == PIXEL_COLOR_UPDATE) {
        console.log("PIXEL COLOR UPDATE");
        const id = action.pixel.id;
        return {
            ...state,
            pixels: state.pixels.map(pixel =>
                pixel.id === action.pixel.id
                    ? { ...pixel, color: action.pixel.color }
                    : pixel
            )
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