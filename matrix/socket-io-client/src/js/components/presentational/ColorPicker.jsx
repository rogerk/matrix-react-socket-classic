import React from "react";

const ColorPicker = props => {
    const { color } = props;
    const { handleColorChange } = props;
    return (
        <div>
            <div>Color</div>
            <input
                name="color"
                type="color"
                value={color}
                onChange={handleColorChange}
            />
        </div>
    );
};

export default ColorPicker;
