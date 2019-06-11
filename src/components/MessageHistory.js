import React from 'react';
import './MessageHistory.css';
import Message from './Message';

const MessageHistory = (props) => {
  const history = props.history.map((message, i) => {
    return (
      <p className={`chat-entry ${message.sender === "Vladimir" ? "local" : "remote"}`}>
        <Message key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
      </p>
    )
  });

  return (
    <div className="chat-log">
      {history}
    </div>
  )
};

export default MessageHistory;