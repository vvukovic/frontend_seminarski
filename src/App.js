import React from 'react';
import ChatMessages from './components/ChatMessagesComponent';
import ChatInput from './components/ChatInputComponent';
import * as Helper from './common/Helper';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Scaledrone implementacija
    this.drone = new window.Scaledrone("FqGCRGAPL0Z0MtWx", {
      data: this.state.member
    });
  }

  componentDidMount() {
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-Algebra");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  };

  state = {
    data: '',
    messages: [],
    member: {
      username: Helper.RandomizeUsername(),
      color: Helper.RandomizeBgColor()
    }
  };

  onMessageBeingSent = (textMsg) => {
    // Scaledrone
    this.drone.publish({
      room: "observable-Algebra",
      message: textMsg
    });
  }

  render() {
    return (
      <div className="App">
        <div className="navbar navbar-light bg-light">
          <img src="logo.png" className="navbar-brand" alt="Logo" loading="lazy" />
          <h2>ReactJS - Chat aplikacija</h2>
        </div>
        <ChatMessages messages={this.state.messages} currentMember={this.state.member} />
        <div className="form-group">
          <ChatInput handleMsgBeingSent={this.onMessageBeingSent} />
        </div>
      </div>
    );
  }
}