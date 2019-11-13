import { connect } from "react-redux";
import React, { Component } from "react";
import Controls from "../presentational/Controls.jsx";
import { setColor } from "../../actions/index.js";
import { resetMatrixColor } from "../../actions/index.js";

class ControlsContainer extends Component {
    constructor(props) {
        super();
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleColorChange = event => {
        this.props.setColor({ color: event.target.value });
    };

    handleReset = event => {
        this.props.resetMatrixColor({ color: this.props.color });
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
        color: state.color
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setColor: payload => {
            dispatch(setColor(payload));
        },
        resetMatrixColor: payload => {
            dispatch(resetMatrixColor(payload));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlsContainer);
