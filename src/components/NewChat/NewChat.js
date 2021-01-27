import React, { useState } from 'react';
import './NewChat.css'

import { ArrowBack } from '@material-ui/icons';

export default ({ user, chatlist, show, setShow }) => {
    const [list, setList] = useState([
        { id: 1, avatar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg', name: 'Raquel Organ' },
        { id: 2, avatar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14046.jpg', name: 'Eliezer Organ' },
        { id: 3, avatar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14047.jpg', name: 'Maria Eduarda Organ' },
        { id: 4, avatar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14048.jpg', name: 'Carmen Reese Organ' }
    ])
    const handleClose = () => {
        setShow(false);
    }
    return (
        <div className="newChat" style={{ left: show ? '0px' : '-415px' }}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBack style={{ color: '#FFF' }} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}