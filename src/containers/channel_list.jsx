import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import actions
import { selectChannel } from '../actions';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(channel) {
    this.props.selectChannel(channel);
  }

  render() {
    return (
      <div className="channels-container">
        <h2>Channels</h2>
        <ul>
          {this.props.channels.map(channel => (
            <li
              key={channel}
              className={channel === this.props.selectedChannel ? 'active' : null}
              onClick={() => this.handleClick(channel)}
              role="presentation"
            >
              #{channel}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
