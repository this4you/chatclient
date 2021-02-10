import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';
import {IconRead, Avatar} from '../';
import {Link} from "react-router-dom";

const getMessageTime = createdAt => {
    if (createdAt) {
        createdAt = parseISO(createdAt);
        if (isToday(createdAt)) {
            return format(createdAt, 'HH:mm');
        } else {
            return format(createdAt, 'dd.MM.yyyy');
        }
    }
};
// TODO: Доделать счет непрочитаных сообщений
// TODO: Доделать логику прочтения сообщения
// TODO: Доделать логику обновления списка диалогов при получении сообщения
const renderLastMessage = (message, userId) => {
    let text = '';
    if (!message) {
        return text;
    } else if (!message.text && message.attachments.length) {
        text = 'прикрепленный файл';
    } else {
        text = message.text;
    }

    return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

const DialogItem = ({_id, createdAt, isMe, currentDialogId, partner, lastMessage, userId, onSelect}) => (
    <Link to={`/dialog/${_id}`}>
        <div
            className={
                classNames('dialogs__item', {
                    'dialogs__item--online': partner.isOnline,
                    'dialogs__item--selected': currentDialogId === _id
                })
            }
            onClick={onSelect.bind(this, _id)}
        >
            <div className="dialogs__item-avatar">
                <Avatar user={partner}/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{partner.fullName}</b>
                    <span>
                    {getMessageTime(lastMessage && lastMessage.createdAt)}
                </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {renderLastMessage(lastMessage, userId)}
                    </p>
                    <IconRead isMe={isMe} isRead={false}/>
                    {/*{unread > 0 && <div className="dialogs__item-info-bottom-count">{unread > 9 ? '+9' : unread}</div>}*/}
                </div>
            </div>
        </div>
    </Link>
);

export default DialogItem;