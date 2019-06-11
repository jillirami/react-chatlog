import React from 'react';
import './Message.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

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

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
};

export default Message;