import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return (
      <div >
          {this.props.list.map(c => <Contact key={c} name={c} setConvo={this.props.setConvo}/>)}
      </div>
    );
  }
}

export default List;
