import React, {useEffect} from 'react';
import "./Home.scss"
import {EllipsisOutlined} from '@ant-design/icons';
import {Button} from "antd";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {Messages, ChatInput, Status, Sidebar} from "../../containers";
import {socket} from "../../core";
import {dialogsActions} from "../../redux/actions";
//TODO: доделать проверку на верификацию при авторизации
//TODO: доделать отображегие подьзователя в диалоге
const Home = ({currentUserId, setCurrentDialogId, location}) => {
    useEffect(() => {
        setCurrentDialogId(window.location.pathname.split('dialog/')[1]);
    }, [location.pathname]);

    useEffect(() => {
        if (currentUserId) {
            socket.emit('join', currentUserId.toString());
        }
    }, [currentUserId]);
    return (
        <section className="home">
            <div className="chat">
                <Sidebar/>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div/>
                        <Status/>
                        <Button type='ghost' shape='circle'>
                            <EllipsisOutlined style={{fontSize: '20px'}}/>
                        </Button>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages/>
                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter(
    connect(
        ({users}) => ({currentUserId: users.data && users.data._id}), dialogsActions
    )(Home),
);