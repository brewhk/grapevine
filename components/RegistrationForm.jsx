var RegistrationForm = React.createClass({
  getInitialState: function () {
    return {
      errorMessage: '',
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var self = this;
    firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(function(user) {
        console.log('User created successfully!');
        console.log(user);
      })
      .catch(function(error) {
        console.log('Sign Up failed. See details below:');
        console.log(error);
        self.setState({
          errorMessage: error.message,
        });
      });
  },
  handleInputChange: function () {
    this.setState({
      errorMessage: '',
    })
  },
  render: function () {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="registration-form__input-email">
            Email
<input id="registration-form__input-email" type="email" ref={(function (c) { this.email = c }).bind(this)} onChange={this.handleInputChange} />
          </label><br/>
          <label htmlFor="registration-form__input-password">
            Password
  <input id="registration-form__input-password" type="password" ref={(function (c) { this.password = c }).bind(this)} onChange={this.handleInputChange} />
          </label><br/>
          <input type="submit" />
          <div>{this.state.errorMessage}</div>
        </form>
      </div>
    );
  }
});

module.exports = RegistrationForm;
