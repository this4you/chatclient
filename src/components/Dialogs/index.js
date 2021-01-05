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
        {items && items.length ? orderBy(items, ["createdAt"], ["desc"]).map(item => (
                <DialogItem
                    _id={item._id}
                    onSelect={onSelectDialog}
                    key={item._id}
                    isMe={item.author._id === userId}
                    currentDialogId={currentDialogId}
                    {...item}
                />
            )) :
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
        }
    </div>
);

export default Dialogs;