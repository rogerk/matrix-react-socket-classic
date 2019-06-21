import PropTypes from "prop-types";
import React from "react";
import "./matrix-styles.scss";

const Matrix = props => {
    const { handleClick } = props;
    let rows = [],
        cols = [];
    let index = 0;
    const total = 64;
    const pixs = props.pixels.map((pixel, idx) => {
        cols.push(
            <button
                className="pixel"
                style={{ background: pixel.color }}
                key={idx}
                type="button"
                onClick={() => handleClick(pixel)}
            />
        );
        if ((index + 1) % 8 == 0) {
            rows.push(
                <div className="row" key={index}>
                    {cols}
                </div>
            );
            cols = [];
        }
        index++;
    });

    return <div className="container-fluid">{rows}</div>;
};

Matrix.propTypes = {
    pixels: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            x: PropTypes.string.isRequired,
            y: PropTypes.string.isRequired,
            color: PropTypes.string
        }).isRequired
    ).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Matrix;
