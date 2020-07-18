import React from 'react';
import ChatMessages from './components/ChatMessagesComponent';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatMessages: [{
        text: "Bok, ja sam Vedran!",
        member: {
          color: "blue",
          username: "Vedran"
        }
      }],
      chatMember: {
        username: this.randomizeUsername,
        color: this.randomizeBgColor
      }
    }
  }

  randomizeUsername = () => {
    const username = 'User-' + (Math.floor(Math.random() * 7));
    return username;
  }

  randomizeBgColor = () => {
    const color = '#' + (Math.floor(Math.random() * 0xCCCCCC).toString(16));
    return color;
  }
  
  render() {
    return (
      <div className="App">
        <ChatMessages messages={this.state.chatMessages} currentMember={this.state.chatMember} />
      </div>
    );
  }
}