import React from 'react';
import "./Home.scss"
import {TeamOutlined, EllipsisOutlined, FormOutlined} from '@ant-design/icons';
import {Button} from "antd";
import {Status, ChatInput} from "../../components/";
import {Dialogs, Messages} from "../../containers"

const Home = () => {
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
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Аня</b>
                            <div className="chat__dialog-header-status">
                                <Status online={true}/>
                            </div>
                        </div>
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

export default Home;