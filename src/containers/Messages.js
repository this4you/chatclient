import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import {messagesActions} from "../redux/actions";
import {Messages as BaseMessages} from '../components';
import {socket} from '../core';

const Messages = ({messages = [], currentDialogId, fetchMessages, addMessage, isLoading, currentUser}) => {
    const messageRef = useRef(null);
    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId, fetchMessages]);

    useEffect(() => {
        socket.on("SERVER:MESSAGE_CREATED", messageJSON => {
            const message = JSON.parse(messageJSON);
            addMessage(message);
        });
    }, [addMessage]);


    useEffect(() => {
        messageRef.current.scrollTo(0, 9999999);
    }, [messages]);
    return (
        <BaseMessages
            isLoading={isLoading}
            items={messages}
            blockRef={messageRef}
            user={currentUser}
        />
    );
};

export default connect(({messages, dialogs, users}) => ({
    currentDialogId: dialogs.currentDialogId,
    messages: messages.items,
    isLoading: messages.isLoading,
    currentUser: users.data
}), messagesActions)(Messages);