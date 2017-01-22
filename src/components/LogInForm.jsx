import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
      .then((user) => {
        console.log('You have logged in successfully!');
        console.log(user);
      })
      .catch((error) => {
        console.log('Log In failed! See details below:');
        console.log(error);
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  handleInputChange() {
    this.setState({
      errorMessage: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="log-in-form__input-email">
            Email
            <input id="log-in-form__input-email" type="email" ref={((c) => { this.email = c }).bind(this)} onChange={this.handleInputChange.bind(this)} />
          </label><br/>
          <label htmlFor="log-in-form__input-password">
            Password
            <input id="log-in-form__input-password" type="password" ref={((c) => { this.password = c }).bind(this)} onChange={this.handleInputChange.bind(this)} />
          </label><br/>
          <input type="submit" />
          <div>{this.state.errorMessage}</div>
        </form>
      </div>
    );
  }
};

export default LogInForm;
