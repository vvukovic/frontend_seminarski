import React from 'react';

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textMessage: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            textMessage: event.target.value
        });
    };

    handleSendMessage = (event) => {
        event.preventDefault();
        this.props.handleMsgBeingSent(this.state.textMessage); // proslijedjujemo text putem eventa u App.js
        this.setState({
            textMessage: "" // resetiramo text polje
        });
    };

    render() {
        return (
            <form onSubmit={event => this.handleSendMessage(event)}>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        onChange={event => this.handleInputChange(event)}
                        value={this.state.textMessage}
                        type="text"
                        placeholder="Unesite svoju poruku"
                        autoFocus={true}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary">Pošalji!</button>
                    </div>
                </div>
            </form>
        )
    }
}