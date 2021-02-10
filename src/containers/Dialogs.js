import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {Dialogs as BaseDialogs} from '../components'
import {dialogsActions} from "../redux/actions";
import {socket} from '../core';

const Dialogs = ({userId, fetchDialogs, setCurrentDialogId, dialogs}) => {
    const {items = [], currentDialogId} = dialogs;
    const [inputValue, setValue] = useState('');
    const [filtered, setFilteredItems] = useState(Array.from(items));
    const onChangeInput = (value = '') => {
        setFilteredItems(
            items.filter(
                dialog =>
                    dialog.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    dialog.partner.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0,
            ));
        setValue(value);
    };

    // useEffect(() => {
    //     if (!items.length) {
    //         fetchDialogs();
    //     } else {
    //         setFilteredItems(items);
    //     }
    // }, [items, fetchDialogs])
    useEffect(() => {
        if (items.length) {
            onChangeInput();
        }
    }, [items]);

    useEffect(() => {
            fetchDialogs();
            socket.on('SERVER:DIALOG_CREATED', () => {
                fetchDialogs();
            });
            socket.on('SERVER:MESSAGE_CREATED', () => {
                fetchDialogs();
            });
            // socket.on('SERVER:MESSAGES_READED', updateReadedStatus);
            // return () => {
            //     socket.removeListener('SERVER:DIALOG_CREATED', fetchDialogs);
            //     socket.removeListener('SERVER:NEW_MESSAGE', fetchDialogs);
            // };
    }, []);

    return (
        <BaseDialogs
            items={filtered}
            userId={userId}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
    );
};

export default connect(({dialogs, users}) =>
    ({dialogs: dialogs, currentUserId: users.data && users.data._id}), dialogsActions)(Dialogs);