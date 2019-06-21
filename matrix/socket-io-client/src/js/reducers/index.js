import { ALL_MATRIX, PIXEL_COLOR_UPDATE } from "../constants/action-types";
import { ALL_MATRIX_FAILURE } from "../constants/action-types";
import { INITIAL_MATRIX } from "../constants/action-types";
import store from "../store";

const initialState = {
    pixels: []
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
        action.pixel.color = "purple";
        return {
            ...state,
            pixels: state.pixels.map(pixel =>
                pixel.id === action.pixel.id
                    ? { ...pixel, color: action.pixel.color }
                    : pixel
            )
        };
    } else {
        return state;
    }
};
