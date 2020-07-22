import React from 'react';
import ChatMessages from './components/ChatMessagesComponent';
import ChatInput from './components/ChatInputComponent';
import UsersOnline from './components/UsersOnlineComponent';
import * as Helper from './common/Helper';
import './App.css';

// gosti u chatu
let members = [];

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
      console.log('Uspjesno ste se spojili na Scaledrone');

      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-Algebra");
    
    room.on('open', error => {
      if (error) {
        return console.error(error);
      }
      console.log('Uspjesno spajanje u sobu - Algebra');
    });

    // pracenje gostiju tko je online
    room.on('members', m => {
      members = m;
    });

    room.on('member_join', member => {
      members.push(member);
    });

    room.on('member_leave', ({ id }) => {
      const index = members.findIndex(member => member.id === id);
      members.splice(index, 1);
    });

    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  };

  state = {
    messages: [],
    member: {
      username: Helper.RandomizeUsername(),
      color: Helper.RandomizeBgColor()
    }
  };

  onMessageBeingSent = (textMsg) => {
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
        <div>
          <UsersOnline membersOnline={members} />
        </div>
        <ChatMessages messages={this.state.messages} currentMember={this.state.member} />
        <div className="form-group">
          <ChatInput handleMsgBeingSent={this.onMessageBeingSent} />
        </div>
      </div>
    );
  }
}