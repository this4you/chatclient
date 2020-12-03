import React, {useState} from 'react';
import {Dialogs as BaseDialogs} from '../components'

const Dialogs = ({items, userId}) => {
    const [inputValue, setValue] = useState('');
    const [filtered, setFilteredItems] = useState(Array.from(items));
    const onChangeInput = value => {
        setFilteredItems(
            items.filter(
                dialog => dialog.user.fullName.toLowerCase().indexOf(value && value.toLowerCase()) >= 0
            ));
        setValue(value);
    };
    return (
        <BaseDialogs
            items={filtered}
            userId={userId}
            onSearch={onChangeInput}
            inputValue={inputValue}
        />
    );
};

export default Dialogs;