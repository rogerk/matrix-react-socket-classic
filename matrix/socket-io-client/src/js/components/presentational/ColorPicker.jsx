import React from "react";

const ColorPicker = props => {
    const { color } = props;
    const { handleColorChange } = props;
    return (
        <div className="container">
            <div>Color</div>
            <div>
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                />
            </div>
        </div>
    );
};

export default ColorPicker;
