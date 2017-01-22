import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Header from './Header.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import LogInForm from './LogInForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        userIsLoggedIn: user ? true : false,
      });
    });
  }

  render() {
    return (
      <div>
        <Header userIsLoggedIn={this.state.userIsLoggedIn} />
        { this.state.userIsLoggedIn ? <p>This is where the posts will go!</p> : <div><RegistrationForm /><LogInForm/></div> }
        <footer>© 2016 Brew Creative Limited. All rights reserved.</footer>
      </div>
    )
  }
};

export default App;
