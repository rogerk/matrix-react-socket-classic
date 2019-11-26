import React from "react";
import { connect } from "react-redux";
import MatrixContainer from "./container/MatrixContainer.jsx";
import ControlsContainer from "./container/ControlsContainer.jsx";

const App = ({ errors }) => {
    return (
        <div>
            {errors}
            <div className="container">
                <div className="row">
                    <div>
                        <MatrixContainer />
                    </div>
                    <div className="col-sm">
                        <ControlsContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(state => ({
    errors: state.error
}))(App);
