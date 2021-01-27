import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from '../MessageItem/MessageItem';

import {
    Search,
    AttachFile,
    MoreHoriz,
    InsertEmoticon,
    Close,
    Send,
    Mic
} from '@material-ui/icons';

export default ({user}) => {
    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
        {author: 1, body: 'Olá, Mundo!'},
        {author: 1, body: 'Olá, Mundo da Programação!'},
        {author: 2, body: 'Hello World!'},
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
    }
    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }
    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }
            recognition.start();
        }
    }
    const handleSendClick = () => {

    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg" alt="" />
                    <div className="chatWindow--name"></div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow-btn">
                        <Search style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFile style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreHoriz style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
            <div className="chatWindow--emojiarea"
                style={{ height: emojiOpen ? '200px' : '0px' }}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div className="chatWindow-btn"
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? '40px' : '0px' }}
                    >
                        <Close style={{ color: '#919191' }} />
                    </div>

                    <div className="chatWindow-btn" onClick={handleOpenEmoji}>
                        <InsertEmoticon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input
                        className="chatWindow--input"
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow-btn">
                            <Mic style={{ color: listening ? '#126ECE' : '#919191' }} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow-btn">
                            <Send style={{ color: '#919191' }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}