import React, {useState} from "react";
import './Sidebar.scss';
import {Button, Modal, Select, Form, Input} from "antd";
import {FormOutlined, TeamOutlined} from "@ant-design/icons";
import {Dialogs} from "../../containers";
import './Sidebar.scss';

const {TextArea} = Input;
const {Option} = Select;

const Sidebar = ({user, users, onShow, onClose, visible, inputValue, onSearch, onChangeInput, onSelectUser, messageText, isLoading, onModalOk, onChangeTextArea, selectedUserId}) => {
    const options = users.map(user => <Option key={user._id} value={user._id}>{user.fullName}</Option>);
    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <div>
                    <Button type='ghost' shape='circle'>
                        <TeamOutlined/>
                    </Button>
                    <span>Список діалогів</span>
                </div>
                <Button type='ghost' shape='circle' onClick={onShow}>
                    <FormOutlined/>
                </Button>
            </div>
            <div className="chat__sidebar-dialogs">
                {user && <Dialogs
                    userId={user._id}
                />}
            </div>
            <Modal
                title="Створити діалог"
                visible={visible}
                onOk={onClose}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        Закрити
                    </Button>,
                    <Button
                        disabled={!messageText}
                        key="submit"
                        type="primary"
                        loading={isLoading}
                        onClick={onModalOk}>
                        Створити
                    </Button>,
                ]}
            >
                <Form className="add-dialog-form">
                    <Form.Item label="Введіть ім'я користувача чи E-Mail">
                        <Select
                            value={inputValue}
                            placeholder="Введіть ім'я користувача чи E-Mail"
                            notFoundContent={null}
                            filterOption={false}
                            onSearch={onSearch}
                            onChange={onChangeInput}
                            onSelect={onSelectUser}
                            style={{width: '100%'}}
                            defaultActiveFirstOption={false}
                            showSearch>
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Введіть текст повідомлення">
                            <TextArea
                                autoSize
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </div>
    );
}

Sidebar.defaultProps = {
    users: [],
};

export default Sidebar;