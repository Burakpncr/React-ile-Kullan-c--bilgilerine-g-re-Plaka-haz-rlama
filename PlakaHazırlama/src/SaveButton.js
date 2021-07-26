import React, { Component } from "react";
import PropTypes from "prop-types";

export class SaveButton extends Component {

    render() {
        const { disabled, style, onClick, className, value, onChange, id,name } = this.props;
        return (
            <button
                id={id}
                onChange={onChange}
                value={value}
                className={className}
                disabled={disabled}
                onClick={onClick}
                style={style}
            >
               {name}
            </button>
        );
    }
}
Text.propTypes = {
    disabled: PropTypes.bool,

};
Text.defaultProps = {
    disabled: false,
};
export default SaveButton;