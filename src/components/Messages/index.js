import React from 'react';
import PropTypes from 'prop-types';
import {Empty, Spin} from 'antd';
import classNames from 'classnames';
import './Messages.scss';
import {Message} from "../index";

const Messages = ({blockRef, items, isLoading, user, onRemoveMessage}) => {
    return (
        <div
            ref={blockRef}
            className={classNames("messages", {"messages--loading": isLoading})}>
            {isLoading ? (
                    <Spin tip='Loading...' size='large'/>)
                : items && items.length > 0 && !isLoading ? (
                    items.map(item => <Message {...item} isMe={user._id === item.user._id} key={item._id}
                                               onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                                                date={item.createdAt}/>)
                ) : (
                    <Empty description="Нет сообщений"/>
                )
            }
        </div>
    )
};

Messages.proTypes = {
    items: PropTypes.array
};
export default Messages;