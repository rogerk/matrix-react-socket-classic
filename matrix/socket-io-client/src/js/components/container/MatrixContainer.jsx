import { connect } from "react-redux";
import React, { Component } from "react";
import io from "socket.io-client";
import Matrix from "../presentational/Matrix.jsx";
import store from "../../store/index.js";
import * as Actions from "../../actions";

class MatrixContainer extends Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = event => {
        const state = store.getState();
        const color = state.color;
        store.dispatch(
            Actions.updatePixelColor({
                pixel: event,
                color: color
            })
        );
    };

    componentDidMount = () => {
        store.dispatch(Actions.initialMatrix());
    };

    render = () => {
        return (
            <Matrix pixels={this.props.pixels} handleClick={this.handleClick} />
        );
    };
}

const mapStateToProps = state => {
    return {
        pixels: state.pixels
    };
};

export default connect(mapStateToProps)(MatrixContainer);
