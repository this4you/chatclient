import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import {messagesActions} from "../redux/actions";
import {Messages as BaseMessages} from '../components';

const Messages = ({messages = [], currentDialogId, fetchMessages, isLoading}) => {
    const messageRef = useRef(null);
    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId, fetchMessages]);

    useEffect(() => {
        messageRef.current.scrollTo(0, 9999999);
    }, [messages]);
    return (
        <BaseMessages
            isLoading={isLoading}
            items={messages}
            blockRef={messageRef}
        />
    );
};

export default connect(({messages, dialogs}) => ({
    currentDialogId: dialogs.currentDialogId,
    messages: messages.items,
    isLoading: messages.isLoading
}), messagesActions)(Messages);