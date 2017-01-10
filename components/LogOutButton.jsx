var LogOutButton = React.createClass({
  handleLogOut: function() {
    firebase.auth().signOut();
  },
  render: function () {
    return <button onClick={this.handleLogOut}>Log Out</button>
  }
});

module.exports = LogOutButton;
