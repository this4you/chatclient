import React from 'react';
import classNames  from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import {IconRead, Avatar} from '../';
const getMessageTime = created_at => {
    const date = new Date(created_at);
    if (isToday(created_at)) {
        return format(date, "HH:mm")
    } else {
        return format(date, "dd:MM:yyyy")
    }
};

const DialogItem = ({id, user, unread, created_at, text, isMe, onSelect, currentDialogId }) => (
    <div
        className={
            classNames('dialogs__item', {
                'dialogs__item--online': user.isOnline,
                'dialogs__item--selected': currentDialogId === id
            })
        }
        onClick={onSelect.bind(this, id)}
    >
        <div className="dialogs__item-avatar">
            <Avatar user={user}/>
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullName}</b>
                <span>
                    {/*<Time date={lastMessage.created_at}/>*/}
                    {getMessageTime(created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>
                    {text}
                </p>
                <IconRead isMe={isMe} isRead={true}/>
                {unread > 0 && <div className="dialogs__item-info-bottom-count">{unread > 9 ?'+9' : unread}</div>}
            </div>
        </div>
    </div>
);

export default DialogItem;