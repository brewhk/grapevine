var Header = require('./Header.jsx');
var RegistrationForm = require('./RegistrationForm.jsx');
var LogInForm = require('./LogInForm.jsx');

var App = React.createClass({
  getInitialState: function () {
    return {
      userIsLoggedIn: false
    };
  },
  componentWillMount: function () {
    firebase.auth().onAuthStateChanged(function(user) {
      this.setState({
        userIsLoggedIn: user ? true : false,
      });
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <Header userIsLoggedIn={this.state.userIsLoggedIn} />
        { this.state.userIsLoggedIn ? <p>This is where the posts will go!</p> : <div><RegistrationForm /><LogInForm/></div> }
        <footer>© 2016 Brew Creative Limited. All rights reserved.</footer>
      </div>
    )
  }
});

module.exports = App;
