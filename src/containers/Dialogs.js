import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {Dialogs as BaseDialogs} from '../components'
import {dialogsActions} from "../redux/actions";

const Dialogs = ({items = [], userId, fetchDialogs, setCurrentDialogId, currentDialogId}) => {
    const [inputValue, setValue] = useState('');
    const [filtered, setFilteredItems] = useState(Array.from(items));
    const onChangeInput = value => {
        setFilteredItems(
            items.filter(
                dialog => dialog.user.fullName.toLowerCase().indexOf(value && value.toLowerCase()) >= 0
            ));
        setValue(value);
    };

    useEffect(() => {
        if (!items.length) {
            fetchDialogs();
        } else {
            setFilteredItems(items);
        }
    }, [items, fetchDialogs])
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

export default connect(({dialogs}) => dialogs, dialogsActions)(Dialogs);