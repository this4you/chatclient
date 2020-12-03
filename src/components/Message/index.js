import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Time} from '../';
import {IconRead} from '../';
import convertCurrentTime from '../../utils/convertCurrentTime'

import waveSvg from '../../assets/img/wave.svg'
import pauseSvg from '../../assets/img/pause.svg'
import playSvg from '../../assets/img/play.svg'
import './Message.scss';
const MessageAudio = ({ audioSrc }) => {
    const audioElem = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = '0.01';
        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false,
        );
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false,
        );
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false,
        );
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    }, []);

    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audioSrc} preload="auto" />
            <div className="message__audio-progress" style={{ width: progress + '%' }} />
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pauseSvg} alt="Pause svg" />
                        ) : (
                            <img src={playSvg} alt="Play svg" />
                        )}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg" />
                </div>
                <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    );
};
const Message = ({avatar, user, text, date, isMe, isRead, attachments, isTyping, audio}) => {
    return (
        <div className={classNames('message',
            {
                "message__isme": isMe,
                "message__is-typing": isTyping,
                "message__image": attachments && attachments.length === 1,
                "message__is-audio": audio
            })}>
            <div className="message__content">
                <IconRead isMe={isMe} isRead={isRead}/>
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping &&
                            <div className="message__typing">
                                <span/>
                                <span/>
                                <span/>
                            </div>
                            }
                            {audio &&
                                <MessageAudio audioSrc={audio}/>
                            }
                        </div>
                    )}
                    {attachments && (
                        <div className="message__attachments">
                            {attachments.map((item) => (
                                <div className="message__attachments-item" key={item.filename}>
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            ))}
                        </div>
                    )}
                    {date && (<span className="message__date">
                        <Time date={date}/>
                    </span>
                    )}
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},
    isMe: false
}

Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.object,
    text: PropTypes.string,
    date: PropTypes.string,
    isMe: PropTypes.bool,
    isRead: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string
};

export default Message;