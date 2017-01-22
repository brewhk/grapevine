import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

class LogOutButton extends React.Component {
  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {
    return <button onClick={this.handleLogOut}>Log Out</button>
  }
};

export default LogOutButton;
