import React from "react";
import MatrixContainer from "./container/MatrixContainer.jsx";
import ControlsContainer from "./container/ControlsContainer.jsx";

const App = () => {
    return (
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
    );
};

export default App;
