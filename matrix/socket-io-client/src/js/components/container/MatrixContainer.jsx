import { connect } from "react-redux";
import React, { Component } from "react";
import Matrix from "../presentational/Matrix.jsx";
import { initialMatrix } from "../../actions/index.js";
import { updatePixelColor } from "../../actions/index.js";

class MatrixContainer extends Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = event => {
        const color = this.props.color;
        this.props.updatePixelColor({ pixel: event, color: color });
    };

    componentDidMount = () => {
        this.props.initialMatrix();
    };

    render = () => {
        return (
            <div>
                <Matrix
                    pixels={this.props.pixels}
                    handleClick={this.handleClick}
                />
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        pixels: state.pixels,
        color: state.color,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initialMatrix: () => {
            dispatch(initialMatrix());
        },
        updatePixelColor: payload => {
            dispatch(updatePixelColor(payload));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatrixContainer);
