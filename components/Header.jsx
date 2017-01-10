var LogOutButton = require('./LogOutButton.jsx');

var Header = function (props) {
  return (
    <div>
      <img src="./img/logo.png" />
      {
        props.userIsLoggedIn ? <div><p>You're logged in!</p><LogOutButton/></div> : <p>Register or log In below</p>
      }
    </div>
  )
}

module.exports = Header;
