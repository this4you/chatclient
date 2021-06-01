import React from 'react';
import {ChatInput as ChatInputBase} from "../components";
import {connect} from "react-redux";
import {messagesActions} from "../redux/actions";

const ChatInput = ({fetchSendMessage, currentDialogId}) => {
    if (!currentDialogId) {
        return null;
    }
    return (
        <div>
            <ChatInputBase onSendMessage={e => {
                if (!e.target.value || !e.target.value.trim()) {
                    return;
                }
                const messageData = {
                    text: e.target.value,
                    dialog_id: currentDialogId
                };
                fetchSendMessage(messageData);
            }}/>
        </div>
    )
}
export default connect(({dialogs}) => ({currentDialogId: dialogs.currentDialogId}), messagesActions)(ChatInput);