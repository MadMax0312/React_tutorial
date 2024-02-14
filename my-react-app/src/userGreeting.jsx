import PropTypes from 'prop-types'

function UserGreeting(props) {

    const welcomeMessage = <h1 className="welcome-message">
                            Welcome {props.name}</h1>

    const loginPrompt = <h1 className="login-prompt">
                        Please Login to Continue</h1>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);

}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    name: 'Guest'
}

export default UserGreeting;