import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";
import './Status.scss';

const Status = ({online}) => (
    <span className={classNames('status', {'status--online': online})}>
        {online ? 'онлайн' : 'офлайн'}
    </span>
);

Status.propTypes = {
    online: PropTypes.bool
}
export default Status;