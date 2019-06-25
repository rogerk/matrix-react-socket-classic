import { connect } from "react-redux";
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Matrix from "../presentational/Matrix.jsx";
import store from "../../store/index.js";
import * as Actions from "../../actions";

class MatrixContainer extends Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.socket = socketIOClient("http://127.0.0.1:4001");
        // Listen for our events
        this.socket.on("AllMatrix", data => {
            store.dispatch(Actions.allMatrix(data));
        });
        // Backend (DB) has been updated.  Now update the client (UI).
        this.socket.on("PixelUpdate", data => {
            store.dispatch(Actions.pixelColorUpdate(data));
        });
        this.socket.on("AllMatrixFailure", err => {
            store.dispatch(Actions.allMatrixFailure(err));
        });
    }

    handleClick = event => {
        const state = store.getState();
        const color = state.color;
        store.dispatch(
            Actions.updatePixelColor({
                socket: this.socket,
                pixel: event,
                color: color
            })
        );
    };

    componentDidMount = () => {
        store.dispatch(Actions.getMatrix({ socket: this.socket }));
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
