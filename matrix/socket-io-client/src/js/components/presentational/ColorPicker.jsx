import React from "react";

const ColorPicker = props => {
    const selectedColor = props.color;
    const { handleColorChange } = props;
    return (
        <div className="container">
            <div>Color</div>
            <div>
                <input
                    type="color"
                    value={selectedColor}
                    onChange={event => handleColorChange(event.target.value)}
                />
            </div>
        </div>
    );
};

export default ColorPicker;
