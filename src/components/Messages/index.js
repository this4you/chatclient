import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from 'antd';

import './Messages.scss';
import {Message} from "../index";

const Messages = ({items}) => {
    return (
        items && items.length ?
            <div>
                {items.map(item => (
                    <Message {...item} key={item._id} />
                ))}
            </div>
            : <Empty description="Нет сообщений"/>
    )
};

Messages.proTypes = {
    items: PropTypes.array
};
export default Messages;