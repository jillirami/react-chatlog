import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import MessageHistory from './components/MessageHistory';

const App = () => {
  // console.log(chatMessages);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat between {chatMessages[0]["sender"]} and {chatMessages[1]["sender"]}</h1>
      </header>
      <main className="App-main">
      <MessageHistory history={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
