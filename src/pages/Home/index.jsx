import React from 'react';
import "./Home.scss"
import {TeamOutlined, EllipsisOutlined, FormOutlined} from '@ant-design/icons';
import {Input, Button} from "antd";
import {Messages, Status, ChatInput} from "../../components/";
import {Dialogs} from "../../containers"

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
                            items={
                                [
                                    {
                                        "_id": "5fb6d449ea84e83e5be812f7",
                                        "text": "Mollit nostrud minim officia anim pariatur incididunt et voluptate consequat labore. Irure tempor pariatur magna consectetur laborum. Quis ipsum reprehenderit nostrud irure velit esse fugiat consectetur cupidatat id sint commodo incididunt.",
                                        "created_at": "Wed Mar 15 1995 16:27:41 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "45fb6d44939b011e4de7382ec",
                                            "fullName": "Nona Chavez",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449ff7cae5dd3d8973f",
                                        "text": "Enim quis consectetur excepteur aliquip ullamco adipisicing quis anim excepteur et elit ex aliquip fugiat. Ipsum ex id aliqua minim officia sunt adipisicing. Et sunt veniam duis consectetur labore.",
                                        "created_at": "Sun May 13 1990 20:28:47 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "45fb6d44906f803f51cbaadde",
                                            "fullName": "Sanchez Gibbs",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449fd7f030e08fc470e",
                                        "text": "Excepteur Lorem excepteur exercitation sunt enim id Lorem. Fugiat pariatur reprehenderit proident veniam. Ex deserunt commodo voluptate duis.",
                                        "created_at": "Thu Aug 31 1995 23:29:42 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "35fb6d449fd166f3ddd8247be",
                                            "fullName": "Simpson Lott",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449cb6005bc8ff6ba9f",
                                        "text": "Quis quis tempor aute pariatur Lorem reprehenderit nisi esse sunt incididunt occaecat ipsum duis. Irure cupidatat esse id enim. Et culpa et ex eu reprehenderit minim.",
                                        "created_at": "Sun May 19 2013 03:59:00 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "15fb6d4498a7a10568b40fcd4",
                                            "fullName": "Isabel Horton",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d4495d0f2b02ecc50dc0",
                                        "text": "Velit nisi proident minim quis sint consectetur nisi mollit consequat aliquip nisi cupidatat pariatur. Quis ea ad consequat quis esse tempor laborum labore anim ipsum. Cillum irure eiusmod sunt adipisicing enim cillum enim cupidatat est labore excepteur et eiusmod mollit.",
                                        "created_at": "Thu Oct 26 2000 05:39:37 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "15fb6d44968ef2d5c5e94746f",
                                            "fullName": "Gallegos Pollard",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449fb477c1d9b8c00a5",
                                        "text": "Officia proident cupidatat aliquip est amet sunt occaecat eiusmod fugiat consequat dolore id sint. Occaecat aliquip sint non nulla ipsum dolor commodo sint velit consectetur. Do sit qui dolor ad anim.",
                                        "created_at": "Mon Oct 15 2018 19:24:29 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "15fb6d449f0220d08f59397c8",
                                            "fullName": "Walters Short",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d44945d50e2dbd04687f",
                                        "text": "Laborum dolore id cillum nostrud ea. Duis tempor et nulla magna exercitation fugiat elit cillum exercitation commodo sit. Id laborum reprehenderit consequat aute elit.",
                                        "created_at": "Wed Mar 01 2000 07:32:13 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d44997a303cb28f7174b",
                                            "fullName": "Billie Riley",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d4495e6eacf66ceb45fe",
                                        "text": "Aliqua Lorem qui nulla exercitation ut duis eu voluptate velit aliqua. Dolor ea deserunt ea reprehenderit ut proident voluptate ea tempor ut. Sit proident nisi et voluptate proident consequat veniam velit.",
                                        "created_at": "Mon Aug 16 1982 07:51:40 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d449a878cb060abd7b57",
                                            "fullName": "Fox Mcintyre",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449b56541f1a3afbd2c",
                                        "text": "Labore aute mollit tempor nisi nostrud et. Nulla in nisi id consectetur aute. Tempor nostrud amet magna amet.",
                                        "created_at": "Sun Sep 02 2007 02:34:12 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d44907face4c857ac903",
                                            "fullName": "Parks Ball",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449b10f4781af3132a7",
                                        "text": "Incididunt irure ullamco aliqua consectetur adipisicing ad nisi ut fugiat proident. Consectetur ullamco ad aute do eiusmod non ex. Proident ullamco ipsum eiusmod consectetur.",
                                        "created_at": "Mon Jan 26 1981 14:33:56 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d449b8d79c4a3eedf2ad",
                                            "fullName": "Whitfield Turner",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d4491733a6185952c0e4",
                                        "text": "Veniam id aliquip dolore occaecat proident elit tempor dolor. Ex Lorem enim aute pariatur qui elit ullamco ex in sit. Consequat cillum elit non sunt.",
                                        "created_at": "Sun May 06 1990 20:04:08 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d449181979c8d9cf27fa",
                                            "fullName": "Booker Hall",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d4499d66c32f8483f8cb",
                                        "text": "Nulla mollit sunt dolore in quis. Minim enim duis occaecat nisi mollit velit fugiat amet cupidatat consectetur qui officia. Duis adipisicing ea deserunt anim esse reprehenderit in commodo consectetur minim incididunt ullamco commodo fugiat.",
                                        "created_at": "Fri Jul 12 2013 11:20:49 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "35fb6d449428b36dd15659602",
                                            "fullName": "Russell Benjamin",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d4492633b751954d78e3",
                                        "text": "Pariatur laboris Lorem ipsum qui dolor culpa cillum. Ut ipsum ullamco ad in. Tempor aliquip cupidatat amet ipsum sunt consectetur adipisicing amet nostrud duis sit reprehenderit occaecat consectetur.",
                                        "created_at": "Sun Jan 04 1970 10:14:22 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "35fb6d449387f05ba19280b98",
                                            "fullName": "Goldie Trevino",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d44914c0d042e65238da",
                                        "text": "Nisi nostrud ex exercitation id sint. Fugiat aliqua enim laboris incididunt ea officia eiusmod laboris dolore id sit et laborum ex. Proident culpa eu ad deserunt commodo nisi esse id veniam laboris.",
                                        "created_at": "Thu Mar 31 1994 19:48:31 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "15fb6d449dbf8d5420b587027",
                                            "fullName": "Chapman Lara",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d44987d6e001ef7639e4",
                                        "text": "Aliqua minim esse non velit commodo excepteur mollit occaecat excepteur. Excepteur nisi pariatur ut quis sint ex et culpa est voluptate commodo. Aute laboris esse et ipsum nostrud exercitation nostrud consectetur cillum esse fugiat nulla laboris.",
                                        "created_at": "Thu Aug 10 1978 03:39:24 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "15fb6d4497a1c0f48637208fb",
                                            "fullName": "Jane Cleveland",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d4496d6f1e74afb3c992",
                                        "text": "Irure et labore velit proident eiusmod eu elit ut anim id irure labore tempor reprehenderit. Incididunt ad magna proident nulla officia et et in esse ex velit laborum. Eu ad deserunt minim nostrud eiusmod laborum aute pariatur laborum occaecat.",
                                        "created_at": "Sat Oct 11 2008 09:25:11 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d449c168dcdcec9ea7d9",
                                            "fullName": "Joann Hopkins",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449837cf29a609239bb",
                                        "text": "Quis ex laboris laborum elit laboris. Eiusmod proident adipisicing pariatur laboris. Minim officia proident officia ut et irure ullamco cillum.",
                                        "created_at": "Sun Oct 20 2002 10:11:20 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "15fb6d449f743507972220d9f",
                                            "fullName": "Blanche Hoffman",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449c1c3606150c7c06a",
                                        "text": "Sit ea ullamco ipsum ut qui ea cupidatat. Laboris pariatur voluptate anim ut. Exercitation enim eiusmod laborum veniam sit velit id deserunt cillum amet labore exercitation veniam.",
                                        "created_at": "Mon Sep 13 1999 16:47:27 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d449c19d605e2e08c9e5",
                                            "fullName": "Odessa Estrada",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d449366fe2321327c2b2",
                                        "text": "Anim labore officia consectetur est labore eiusmod reprehenderit consectetur commodo duis est. Velit consequat ea cupidatat quis elit magna. Quis eu aliqua proident consectetur dolor esse pariatur ea ipsum cupidatat labore nostrud.",
                                        "created_at": "Tue Aug 12 2014 03:14:41 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d4498bd27975936e3a73",
                                            "fullName": "Minerva Stuart",
                                            "avatar": null
                                        }
                                    },
                                    {
                                        "_id": "5fb6d4497de1beac99f58a55",
                                        "text": "Sint ut cupidatat sit elit non id labore velit et. Tempor Lorem veniam occaecat ut exercitation ipsum mollit labore ipsum cillum. Veniam mollit ea et esse labore velit id eiusmod laborum.",
                                        "created_at": "Wed Jul 16 1975 22:03:18 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "25fb6d4495fd962a38184fd69",
                                            "fullName": "Katie Gallegos",
                                            "avatar": null
                                        }
                                    }
                                ]
                            }/>
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
                            <EllipsisOutlined  style={{fontSize: '20px'}} />
                        </Button>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages />
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