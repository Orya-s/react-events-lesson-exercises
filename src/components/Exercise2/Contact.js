import React, { Component } from 'react';

class Contact extends Component {

  chooseContact = () => {
    this.props.setConvo(this.props.name)
  }

  render() {
    return (
      <div onClick={this.chooseContact}>
        {/* should render a "name" recieved in props. Should also reieve the displayConvo prop, and call the function onClick */}
        {this.props.name}
      </div>
    );
  }
}

export default Contact;
