import React from "react";
import "../../../styles/controls-styles.scss";

const Reset = props => {
    const { reset } = props;
    const { handleReset } = props;

    return (
        <button type="button" className="reset" onClick={handleReset}>
            Reset
        </button>
    );
};

export default Reset;
