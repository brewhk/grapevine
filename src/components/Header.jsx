import React from 'react';
import ReactDOM from 'react-dom';
import LogOutButton from './LogOutButton.jsx';

const Header = function (props) {
  return (
    <div>
      <img src="./img/logo.png" />
      {
        props.userIsLoggedIn ? <div><p>You're logged in!</p><LogOutButton/></div> : <p>Register or log In below</p>
      }
    </div>
  )
}

export default Header;
