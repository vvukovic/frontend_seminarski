import React from 'react';

export default class ChatMessages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map((m, idx) => this.printMessage(m, idx))}
      </ul>
    );
  }

  printMessage(message, idx) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const myMessage = member.id === currentMember.id;
    const className = myMessage ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className} key={idx}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}
