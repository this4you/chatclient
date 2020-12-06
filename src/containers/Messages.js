import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {messagesActions} from "../redux/actions";
import {Messages as BaseMessages} from '../components'

const Messages = ({messages = [], currentDialogId, fetchMessages}) => {
    console.log(currentDialogId);
    useEffect(() => {
        fetchMessages(currentDialogId);
    }, [currentDialogId])
    return (
        <BaseMessages
            items={messages}
        />
    );
};

export default connect(({messages, dialogs}) => ({currentDialogId: dialogs.currentDialogId, messages: messages.items}), messagesActions)(Messages);