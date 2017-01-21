var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');

var LogOutButton = React.createClass({
  handleLogOut: function() {
    firebase.auth().signOut();
  },
  render: function () {
    return <button onClick={this.handleLogOut}>Log Out</button>
  }
});

module.exports = LogOutButton;
