import React from "react";
import ColorPicker from "./ColorPicker.jsx";
import Reset from "./Reset.jsx";

const Controls = props => {
    const { color } = props;
    const { handleColorChange } = props;
    const { reset } = props;
    const { handleReset } = props;

    return (
        <div>
            <ColorPicker
                color={props.color}
                handleColorChange={props.handleColorChange}
            />
            <Reset reset={props.reset} handleReset={props.handleReset} />
        </div>
    );
};

export default Controls;
