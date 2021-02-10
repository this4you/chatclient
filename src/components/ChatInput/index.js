import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './ChatInput.scss';
import {SmileOutlined, AudioOutlined, CameraOutlined, CheckCircleOutlined} from "@ant-design/icons";
import {Input, Button} from "antd";
import {UploadField} from '@navjobs/upload';
import {Picker} from 'emoji-mart';

const ChatInput = (props) => {
    const [value, setValue] = useState("");
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const {onSendMessage} = props;
    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };
    const addEmoji = ({colons}) => {
        setValue(value + colons);
    };

    const handleSendMessage = (e) => {
        if (e.keyCode === 13) {
            setValue("");
            onSendMessage(e);
        }
    }

    useEffect(() => {
        const el = document.querySelector('.chat-input__smile-btn');
        document.addEventListener('click', handleOutsideClick.bind(this, el));
        return () => {
            document.removeEventListener('click', handleOutsideClick.bind(this, el));
        };
    }, []);

    const handleOutsideClick = (el, e) => {
        if (el && !el.contains(e.target)) {
            setShowEmojiPicker(false);
        }
    };

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                {emojiPickerVisible && (<div className="chat-input__emoji-picker">
                    <Picker showPreview={false} showSkinTones={false} set='apple' onSelect={(data) => addEmoji(data)}/>
                </div>)}
                <Button type='ghost' shape='circle' onClick={toggleEmojiPicker}>
                    <SmileOutlined/>
                </Button>
            </div>
            <Input size='large'
                   onChange={e => setValue(e.target.value)}
                   onKeyUp={handleSendMessage}
                   placeholder="Введите текст сообщения..."
                   value={value}
            />
            <div className="chat-input__actions">
                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: 'chat-input__actions-upload-btn'
                    }}
                    uploadProps={{
                        accept: '.jpg,.jpeg,.png,.gif,.bmp',
                        multiple: 'multiple'
                    }}
                >
                    <Button type='ghost' shape='circle'>
                        <CameraOutlined/>
                    </Button>
                </UploadField>
                {value ?
                    <Button type='ghost' shape='circle'>
                        <CheckCircleOutlined/>
                    </Button>
                    :
                    <Button type='ghost' shape='circle'>
                        <AudioOutlined/>
                    </Button>
                }
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;