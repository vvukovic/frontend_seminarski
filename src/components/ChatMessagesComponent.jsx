import React from 'react';

export default function ChatMessages({ messages, currentMember }) {
  const myMessage = messages.map(m => m).id === currentMember.id;
  const className = myMessage ?
    "Messages-message currentMember" : "Messages-message";

  return (

    <>
      <ul>
        {messages.map((msg, index) => {
          return (
            <li className={className} key={index}>
              <span
                className="avatar" style={{ backgroundColor: msg.member.color }}
              />
              <div className="Message-content">
                <div className="username">
                  {msg.member.username}
                </div>
                <div className="text">{msg.text}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  );
}
