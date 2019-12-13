import React from "react";
import ColorPicker from "./ColorPicker.jsx";
import Reset from "./Reset.jsx";
import "../../../styles/controls-styles.scss";

const Controls = props => {
    const { color } = props;
    const { handleColorChange } = props;
    const { handleReset } = props;

    return (
        <div className="card border-muted w-75">
            <h5 className="cardTitle controls-container-text">
                Matrix Controls
            </h5>
            <div className="cardBody">
                <p className="cardText controls-container-text">
                    To change the color of a pixel:
                    <ul>
                        <li>Select a color.</li>
                        <li>Select a matrix pixel.</li>
                    </ul>
                </p>
            </div>

            <div className="controls-container">
                <ColorPicker
                    color={props.color}
                    handleColorChange={props.handleColorChange}
                />

                <Reset handleReset={props.handleReset} />
            </div>
        </div>
    );
};

export default Controls;
