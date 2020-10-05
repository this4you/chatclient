import React from 'react';
import './Block.scss';
import  classNames from 'classnames';

const Block = ({children, classname}) => <div className={classNames('block', classname)}>{children}</div>;

export default Block;