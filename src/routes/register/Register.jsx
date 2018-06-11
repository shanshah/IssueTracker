import React, { Component } from 'react';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RegisterActions } from '../../actions/register/RegisterActions';

@connect((store) => ({register: store.register}))
class Register extends React.Component {
  
  handleUserName = (userName) => {
    this.props.dispatch(RegisterActions.setUserName(userName));
  };
  
  handleEmail = (email) => {
    this.props.dispatch(RegisterActions.setEmail(email))
  };
  
  handlePassword = (password) => {
    this.props.dispatch(RegisterActions.setPassword(password))
  };
  
  handleConfirmPassword = (confirmPassword) => {
    this.props.dispatch(RegisterActions.setConfirmPassword(confirmPassword))
  };
  
  handleRegister = () => {
    this.props.dispatch(RegisterActions.submitRegisterData);
  };
  
  render () {
    return (
      <Grid centered={true} style={{marginTop: 50}}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">Register yourself</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form size="large">
              <Form.Field>
                <label>User name:</label>
                <input type="text" onChange={(e) => {this.handleUserName(e.target.value)}} />
                <label>Email:</label>
                <input type="text" onChange={(e) => {this.handleEmail(e.target.value)}} />
              </Form.Field>
              <Form.Field>
                <label>Email:</label>
                <input type="text" onChange={(e) => {this.handleEmail(e.target.value)}} />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input type="password" onChange={(e) => {this.handlePassword(e.target.value)}} />
              </Form.Field>
              <Form.Field>
                <label>Confirm password:</label>
                <input type="password" onChange={(e) => {this.handleConfirmPassword(e.target.value)}} />
              </Form.Field>
              <Button onClick={() => {this.handleRegister()}}>Register</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Register;