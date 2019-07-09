import React from "react";

const Reset = props => {
    const { reset } = props;
    const { handleReset } = props;

    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    );
};

export default Reset;
