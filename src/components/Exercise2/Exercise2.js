import React, { Component } from 'react';
import Conversation from './Conversation';
import List from './List'

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

  getContacts() {
    return this.state.conversations.map(c => c.with)
  }

  displayConvo = contact => {
    this.setState({displayConversation: contact})
  }

  getConvo = () => {
    let contact = this.state.displayConversation
    return this.state.conversations.find(c => c.with === contact)
  }

  render() {
    return (
      <div >
        {this.state.displayConversation != null ? 
        <Conversation sender={this.state.displayConversation} convo={this.getConvo()} backToList={this.displayConvo}/> : 
        <List list={this.getContacts()} setConvo={this.displayConvo}/>}
      </div>
    );
  }
}

export default Exercise2;
