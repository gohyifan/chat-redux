import React from 'react';

// relative imports
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img src="../../assets/images/logo.svg" alt="" className="messaging-logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
