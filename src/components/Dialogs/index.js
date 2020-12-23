import React from 'react';
import orderBy from 'lodash/orderBy';

import './Dialogs.scss';
import DialogItem from "../DialogItem";
import {Input, Empty} from "antd";

const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog, currentDialogId}) => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                placeholder="Поиск среди контактов"
                value={inputValue}
                onChange={e => onSearch(e.target.value)}
            />
        </div>
        {items && items.length ? orderBy(items, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    id={item._id}
                    onSelect={onSelectDialog}
                    key={item._id}
                    isMe={item.user._id === userId}
                    {...item}
                    currentDialogId={currentDialogId}
                />
            )) :
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
        }
    </div>
);

export default Dialogs;