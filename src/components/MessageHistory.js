import React from 'react';
import './MessageHistory.css';
import Message from './Message';
import PropTypes from 'prop-types';

const MessageHistory = (props) => {
  const history = props.history.map((message, i) => {
    return (
      <div key={i} className={`chat-entry ${message.sender === "Vladimir" ? "local" : "remote"}`}>
        <Message sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
      </div>
    )
  });

  return (
    <div className="chat-log">
      {history}
    </div>
  )
};

MessageHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  body: PropTypes.string,
  timeStamp: PropTypes.string,
};

export default MessageHistory;