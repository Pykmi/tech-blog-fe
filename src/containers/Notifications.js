import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationSystem from 'react-notification-system';
import { addNotification } from 'actions/notification_actions';

class NotificationContainer extends Component {
  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const position = 'tr';
    const { level, message, title } = newProps.notification;
    this.notificationSystem.addNotification({ level, message, position, title });
  }

  render() {
    return (
      <NotificationSystem ref="notificationSystem" />
    );
  }
}

const mapStateToProps = (state) => ({
  notification: state.notification
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(addNotification, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
