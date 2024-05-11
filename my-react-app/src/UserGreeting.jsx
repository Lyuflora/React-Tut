import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>;
  const loginPrompt = <h2 className="log-prompt">Please Log in to Continue</h2>;

  return props.isLoggedIn ? welcomeMsg : loginPrompt;
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: 'false',
  username: 'Guest',
};
export default UserGreeting;
