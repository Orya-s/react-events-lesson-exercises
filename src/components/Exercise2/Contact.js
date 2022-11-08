import React, { Component } from 'react';

class Contact extends Component {

  chooseContact = () => {
    this.props.setConvo(this.props.name)
  }

  render() {
    return (
      <div onClick={this.chooseContact}>
        {this.props.name}
      </div>
    );
  }
}

export default Contact;
