import React from 'react';
import './MessageHistory.css';
import Message from './Message';

const MessageHistory = (props) => {
  const history = props.history.map((message, i) => {
    return (
      <Message key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
    )
  });

  return (
    <div className="MessageHistory">
      {history}
    </div>
  )
};

export default MessageHistory;