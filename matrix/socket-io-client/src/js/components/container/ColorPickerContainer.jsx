import React, { Component } from "react";
import ColorPicker from "../presentational/ColorPicker";
import Matrix from "../presentational/Matrix";

class ColorPickerContainer extends Component {
    constructor() {
        super();
        this.state = {
            selectedColor: ""
        };
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleColorChange = event => {
        this.setState({ selectedColor: event });
    };

    componentDidMount = () => {
        if (this.state.selectedColor == "") {
            this.setState({ selectedColor: "#FFFFFF" });
        }
    };

    render = () => {
        return (
            <ColorPicker
                color={this.state.selectedColor}
                handleColorChange={this.handleColorChange}
            />
        );
    };
}

export default ColorPickerContainer;
