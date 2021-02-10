import React from 'react';
import orderBy from 'lodash/orderBy';

import './Dialogs.scss';
import DialogItem from "../DialogItem";
import {Input, Empty} from "antd";
const sortyByLastMessage = (b, a) => {
    if (!a.lastMessage || !b.lastMessage) {
        return 0;
    }
    return new Date(a.lastMessage.createdAt) - new Date(b.lastMessage.createdAt);
}

const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog, currentDialogId}) => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                placeholder="Поиск"
                value={inputValue}
                onChange={e => onSearch(e.target.value)}
            />
        </div>
        {items && items.length ? items.sort(sortyByLastMessage).map(item => {
                const dialogPartner = item.partner._id !== userId ? item.partner : item.author;
                return (
                    <DialogItem
                        _id={item._id}
                        onSelect={onSelectDialog}
                        key={item._id}
                        isMe={item.lastMessage && item.lastMessage.user._id === userId}
                        userId={userId}
                        currentDialogId={currentDialogId}
                        {...item}
                        partner={dialogPartner}
                    />
                )
            }) :
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
        }
    </div>
);

export default Dialogs;
