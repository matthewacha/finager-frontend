import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class Button extends PureComponent {
    render(){
        const {
            customButtonStyle,hasText,
            hasIcon, iconImage,iconAlt,iconStyle,
            text,textStyle,disable, onClick} = this.props;
            const isText = !hasText ? hasText : true;
            const isIcon = !hasIcon ? hasIcon : true;
        return(
            <div disable={disable} role="button" onClick={onClick} className={customButtonStyle}>
              {isIcon &&
                <img
                src={iconImage}
                alt={iconAlt}
                className={iconStyle}
                />
                }
              {isText && <span  className={textStyle}>
                {text}
              </span>
              }
            </div>
        );
    }
};

Button.propTypes = {
    customButtonStyle: PropTypes.string.isRequired,
    hasIcon: PropTypes.bool, 
    iconImage: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    iconStyle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.string.isRequired,
    disable: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    hasText: PropTypes.bool,
}

Button.defaultProps = {
    hasIcon: false,
    disable: "false",
    customButtonStyle: "",
    iconImage: "",
    iconAlt: "",
    iconStyle: "",
    text: "",
    textStyle: "",
    onClick: () => {},
    hasText: false,
}