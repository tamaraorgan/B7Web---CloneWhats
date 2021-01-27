import React, { useState } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem/ChatListItem';
import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';
import NewChat from './components/NewChat/NewChat';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Raquel Organ', avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg"},
    {chatId: 2, title: 'Raquel Organ', avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg"},
    {chatId: 3, title: 'Raquel Organ', avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg"},
    {chatId: 4, title: 'Raquel Organ', avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg"},
  ]);
  const [activeChat, setActiveChat] = useState([]);
  const [user, setUser] = useState({
    id: 2,
    avatar: 'https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg',
    name: 'Tamara Organ'
  });

  const [showNewChat, setshowNewChat] = useState(false);

  const handleNewChat = () => {
    setshowNewChat(true);
  }

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <NewChat
          chatlist={chatlist}
          user={user} 
          show={showNewChat} 
          setShow={setshowNewChat}
        />
        <header>
          <img className='header--avatar' src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <MoreHorizIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon font-size='small' style={{ color: '#919191' }} />
            <input type="search" placeholder='Procurar ou começar uma nova conversa'/>
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem 
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow
            user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}
