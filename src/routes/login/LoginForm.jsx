import React, { Component } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import ErrorMessage from '../../components/common/ErrorMessage';
import '../../stylesheets/components/LoginForm.css';
import { LoginActions } from '../../actions/login/LoginActions';
// import YouTube from 'react-youtube';

@connect(store => ({ login: store.login }))
class LoginForm extends Component {
  // isValidField = (errorMessageLength) => {
  //   if (errorMessageLength > 0) {
  //     return true;
  //   }
  //   return false;
  // };
  handleUserName = (userName) => {
    this.props.dispatch(LoginActions.setUserName(userName));
  };
  handlePassword = (password) => {
    this.props.dispatch(LoginActions.setPassword(password));
  };
  validateUserName = (userName) => {
    this.props.dispatch(LoginActions.validateUserName(userName));
  };
  validatePassword = (password) => {
    this.props.dispatch(LoginActions.validatePassword(password));
  };
  isLoginButtonDisabled = () => {
    if (this.props.login.loginFormValidation.username.isValid &&
      this.props.login.loginFormValidation.password.isValid) {
      return false;
    }
    return true;
  };
  handleLoginClick =() => {
    browserHistory.push('/issues');
  };
  // _onVideoPlayerStateChange = (event) => {
  //   switch(event.data) {
  //     case 0:
  //       console.log('video ended');
  //       break;
  //     case 1:
  //       console.log('video played');
  //       break;
  //     case 2:
  //       console.log('video paused');
  //       break;
  //     case 3:
  //       console.log('video buffering');
  //       break;
  //   }
  // };
  render() {
    return (
      <div className="login-form__container">
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={12} computer={10}>
              <Form>
                <Form.Field>
                  <label htmlFor="username">User name:</label>
                  <Form.Input
                    type="text"
                    placeholder="User name"
                    onChange={(e) => { this.handleUserName(e.target.value); }}
                    onBlur={(e) => { this.validateUserName(e.target.value); }}
                  />
                  {
                    this.props.login.loginFormValidation.username.errMessage.length > 0 &&
                    <ErrorMessage
                      errorMessage={this.props.login.loginFormValidation.username.errMessage}
                    />
                  }
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password">Password:</label>
                  <Form.Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => { this.handlePassword(e.target.value); }}
                    onBlur={(e) => { this.validatePassword(e.target.value); }}
                  />
                  {
                    this.props.login.loginFormValidation.password.errMessage.length > 0 &&
                    <ErrorMessage
                      errorMessage={this.props.login.loginFormValidation.password.errMessage}
                    />
                  }
                </Form.Field>
                <Button
                  type="submit"
                  disabled={this.isLoginButtonDisabled()}
                  onClick={() => { this.handleLoginClick(); }}
                >
                  Login
                </Button>
                <p>
                  <a href="#">Forgot your password?</a>&nbsp;&nbsp;&nbsp;<Link to="/user-registration">Register</Link>
                </p>
              </Form>
              {/*<YouTube*/}
              {/*videoId="2g811Eo7K8U"*/}
              {/*onStateChange={this._onVideoPlayerStateChange}*/}
              {/*/>*/}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
