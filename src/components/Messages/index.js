import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from 'antd';

import './Messages.scss';
import {Message} from "../index";

const Messages = ({items}) => {
    return (
        items && items.length ?
            <div>
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ? Привет, Влад! Как ты там, все получаеться ? Привет, Влад! Как ты там, все получаеться ? Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  attachments={[
                    {
                      filename: 'image1.jpg',
                      url: 'https://source.unsplash.com/100x100/?random=1',
                    }, {
                      filename: 'image2.jpg',
                      url: 'https://source.unsplash.com/100x100/?random=2',
                    }, {
                      filename: 'image3.jpg',
                      url: 'https://source.unsplash.com/100x100/?random=3',
                    },
                  ]}/>
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={true}
                  isRead={true}
              />
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text={null}
                  isMe={false}
                  isRead={false}
                  isTyping
              />
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  attachments={[
                    {
                      filename: 'image.jpg',
                      url: 'https://source.unsplash.com/100x100/?random=1',
                    }
                  ]}/>
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  isRead={true}
              />
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  isRead={true}
              />
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  isRead={true}
              />
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  isRead={true}
              />
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  isRead={true}
              />
              <Message
                  avatar="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png"
                  text="Привет, Влад! Как ты там, все получаеться ?"
                  date="Tue Oct 06 2020 00:27:49 GMT+0300"
                  isMe={false}
                  isRead={true}
              />
            </div>
            : <Empty description="Нет сообщений"/>
    )
};

Messages.proTypes = {
    items: PropTypes.array
};
export default Messages;