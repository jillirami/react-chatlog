import React from 'react';
import './Message.css';
import Timestamp from './Timestamp';

const Message = (props) => {
  return (
    <div className="Message">
    <header className="Message-header">
      <p>{props.sender}</p>
      <p>{props.body}</p>
      <p><Timestamp time={props.timeStamp}/></p>
    </header>
  </div>
  )
};

export default Message;