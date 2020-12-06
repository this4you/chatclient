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
            {/*<Message*/}
            {/*    avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"*/}
            {/*    date="Tue Oct 06 2020 00:27:49 GMT+0300"*/}
            {/*    isMe={false}*/}
            {/*    isRead={true}*/}
            {/*    audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"*/}
            {/*    text="Привет, Влад! Как ты там, все получаеться ?"*/}
            {/*    date="Tue Oct 06 2020 00:27:49 GMT+0300"*/}
            {/*    isMe={false}*/}
            {/*    isRead={true}*/}
            {/*/>*/}
            {/*<Dialogs*/}
            {/*    userId={0}*/}
            {/*    items={*/}
            {/*        [{*/}
            {/*            _id: "2312asdqwe123123sd",*/}
            {/*            text: "Давно установлено, что читатель будет отвлекаться на удобочитаемое содержимое страницы при просмотре ее макета.",*/}
            {/*            isRead: false,*/}
            {/*            created_at: new Date('10.07.2020 12:00'),*/}
            {/*            user: {*/}
            {/*                _id: "bbd213123123",*/}
            {/*                fullName: "Макс Савримович",*/}
            {/*                avatar: null*/}
            {/*            },*/}
            {/*        },*/}
            {/*            {*/}
            {/*                _id: "aa2asdasdas123asd",*/}
            {/*                text: "Как твои дела",*/}
            {/*                isRead: false,*/}
            {/*                created_at: new Date('11.07.2020 12:00'),*/}
            {/*                user: {*/}
            {/*                    _id: "ssd1222",*/}
            {/*                    fullName: "Алан Тьюринг",*/}
            {/*                    avatar: "https://lamcdn.net/lookatme.ru/post-image_featured/O2OY0ml7QaFXusOh5COuUw-default.jpg"*/}
            {/*                },*/}
            {/*            }]*/}
            {/*    }/>*/}
            {/*<hr/>*/}

        </section>
    );
};

export default Home;