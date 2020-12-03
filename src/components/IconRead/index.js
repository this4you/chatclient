import React from "react";
import PropTypes from 'prop-types';
import './IconRead.scss';
import checkedSvg from "../../assets/img/readed.svg";
import noReader from "../../assets/img/noreaded.svg";
const IconRead = ({isMe, isRead}) => (
    isMe && (
        <img className="message__icon-reader" src={isRead ? checkedSvg : noReader} alt="Checked icon"/>)
);

IconRead.propTypes = {
    isMe: PropTypes.bool,
    isRead: PropTypes.bool
};

export default IconRead;