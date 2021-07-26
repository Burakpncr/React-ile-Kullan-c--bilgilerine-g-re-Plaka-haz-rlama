import React, { Component } from "react";
import PropTypes from "prop-types";

export class TextInput extends Component {

    render() {
        const { type, disabled, style, id, onChange, placeHolder, value, pattern, onKeyPress,className } = this.props;
        return (
            <input
                id={id}
                className={className}
                onKeyPress={onKeyPress}
                pattern={pattern}
                disabled={disabled}
                onChange={onChange}
                type={type}
                style={style}
                placeholder={placeHolder}
                value={value}
            />
        );
    }
}
Text.propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.string,
};
Text.defaultProps = {
    disabled: false,
    type: "text",
    placeHolder: "gelmedi"
};

export default TextInput;