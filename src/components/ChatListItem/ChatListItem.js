import React from 'react';
import './ChatListItem.css';

export default ({ onClick, active, data }) => {
    return (
        <div
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img src={data.avatar} alt="" className="chatListItem--avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Boa noite! Os seus Apps Mobile você constrói com qual framework?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}