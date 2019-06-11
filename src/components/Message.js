import React from 'react';
import './Message.css';
import Timestamp from './Timestamp';

const Message = (props) => {
  return (
    <section>
      <p className="entry-name"><b>{props.sender}</b></p>
      <div className="entry-bubble">
          <p className="entry-body">{props.body}</p>
          <p className="entry-time"><Timestamp time={props.timeStamp}/></p>
      </div>
    </section>
  )
};

export default Message;