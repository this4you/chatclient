import React, {useEffect} from 'react';
import "./Home.scss"
import {TeamOutlined, EllipsisOutlined, FormOutlined} from '@ant-design/icons';
import {Button} from "antd";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {Dialogs, Messages, ChatInput, Status} from "../../containers";
import {socket} from "../../core";
//TODO: доделать проверку на верификацию при авторизации
//TODO: доделать отображегие подьзователя в диалоге
const Home = ({currentUserId}) => {
    useEffect(() => {
        if (currentUserId) {
            console.log(currentUserId.toString());
            socket.emit('join', currentUserId.toString());
        }
    }, [currentUserId]);
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <Button type='ghost' shape='circle'>
                                <TeamOutlined/>
                            </Button>
                            <span>Список диалогов</span>
                        </div>
                        <Button type='ghost' shape='circle'>
                            <FormOutlined/>
                        </Button>
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            userId={0}
                        />
                    </div>
                </div>
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
        ({users}) => ({currentUserId: users.data && users.data._id})
    )(Home),
);