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
        this.socket.on("PixelUpdate", data => {
            store.dispatch(Actions.pixelColorUpdate(data));
        });
        this.socket.on("AllMatrixFailure", err => {
            store.dispatch(Actions.allMatrixFailure(err));
        });
    }

    handleClick = event => {
        //       this.props.dispatch(
        //           Actions.updatePixelColor({
        //               socket: this.socket,
        //               pixel: pixel,
        //               color: "purple"
        //           })
        //       );
        this.socket.emit("Pixel", { event });
    };

    componentDidMount = () => {
        store.dispatch(Actions.getMatrix({ socket: this.socket }));
        store.subscribe(() => this.forceUpdate());
    };

    render = () => {
        const state = store.getState();
        return <Matrix pixels={state.pixels} handleClick={this.handleClick} />;
    };
}

const mapStateToProps = state => {
    return {
        state
    };
};

export default connect(mapStateToProps)(MatrixContainer);
