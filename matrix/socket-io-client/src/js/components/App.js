import React from "react";
import MatrixContainer from "./container/MatrixContainer.jsx";
import ColorPickerContainer from "./container/ColorPickerContainer.jsx";

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <MatrixContainer />
                </div>
                <div className="col-sm">
                    <ColorPickerContainer />
                </div>
            </div>
        </div>
    );
};

export default App;
