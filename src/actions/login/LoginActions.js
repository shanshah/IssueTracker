const LoginActionTypes = {
  SET_USER_NAME: 'Login/SET_USER_NAME',
  SET_PASSWORD: 'Login/SET_PASSWORD',
  VALIDATE_USER_NAME: 'Login/VALIDATE_USER_NAME',
  VALIDATE_PASSWORD: 'Login/VALIDATE_PASSWORD',
};

const LoginActions = {
  setUserName: payload => ({ type: LoginActionTypes.SET_USER_NAME, payload }),
  setPassword: payload => ({ type: LoginActionTypes.SET_PASSWORD, payload }),
  validateUserName: payload => ({ type: LoginActionTypes.VALIDATE_USER_NAME, payload }),
  validatePassword: payload => ({ type: LoginActionTypes.VALIDATE_PASSWORD, payload }),
};

export {
  LoginActionTypes,
  LoginActions,
};
