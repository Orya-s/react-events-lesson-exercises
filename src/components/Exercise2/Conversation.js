import React, { Component } from 'react';

class Conversation extends Component {
  //should recieve the prop "convo"

  backBtn = () => {
    this.props.backToList(null)
  }

  render() {
    return (
      <div >
        {this.props.convo.convo.map(c => 
        <div key={c.text}>
          <span className='sender'><b>{c.sender === "self" ? "Me" : this.props.sender}:</b></span>
          {c.text}
        </div>)}

        <button className='back' onClick={this.backBtn}>Back</button>
        
      </div>
    );
  }
}

export default Conversation;
