import { connect } from "react-redux";
import React, { Component } from "react";
import Controls from "../presentational/Controls.jsx";
import store from "../../store/index.js";
import * as Actions from "../../actions";

class ControlsContainer extends Component {
    constructor(props) {
        super();
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleColorChange = event => {
        store.dispatch(Actions.setColor({ color: event.target.value }));
    };

    handleReset = event => {
        store.dispatch(Actions.resetMatrixColor({ color: this.props.color }));
    };

    componentDidMount = () => {};

    render = () => {
        return (
            <div className="container">
                <Controls
                    color={this.props.color}
                    handleColorChange={this.handleColorChange}
                    reset={this.props.reset}
                    handleReset={this.handleReset}
                />
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        color: state.color,
        defaultColor: state.defaultColor
    };
};

export default connect(mapStateToProps)(ControlsContainer);
