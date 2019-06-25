import { connect } from "react-redux";
import React, { Component } from "react";
import ColorPicker from "../presentational/ColorPicker.jsx";
import store from "../../store/index.js";
import * as Actions from "../../actions";

class ColorPickerContainer extends Component {
    constructor() {
        super();
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleColorChange = event => {
        store.dispatch(Actions.setColor({ color: event.target.value }));
    };

    componentDidMount = () => {};

    render = () => {
        return (
            <ColorPicker
                color={this.props.color}
                handleColorChange={this.handleColorChange}
            />
        );
    };
}

const mapStateToProps = state => {
    return {
        color: state.color
    };
};

export default connect(mapStateToProps)(ColorPickerContainer);
