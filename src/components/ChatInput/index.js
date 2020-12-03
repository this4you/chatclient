import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ChatInput.scss';
import {SmileOutlined, AudioOutlined, CameraOutlined, CheckCircleOutlined} from "@ant-design/icons";
import {Input, Button} from "antd";

const ChatInput = (props) => {
    const [value, setValue] = useState();
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type='ghost' shape='circle'>
                    <SmileOutlined/>
                </Button>
            </div>
            <Input size='large'
                   onChange={e => setValue(e.target.value)}
                   placeholder="Введите текст сообщения..."/>
            <div className="chat-input__actions">
                <Button type='ghost' shape='circle'>
                    <CameraOutlined/>
                </Button>
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