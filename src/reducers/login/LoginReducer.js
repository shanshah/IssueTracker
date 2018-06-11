import { LoginActionTypes } from '../../actions/login/LoginActions';
import { validateUserName, validatePassword } from '../../scripts/LoginFormValidation';

const initialState = {
  loginFormValidation: {
    username: { isValid: false, errMessage: [] },
    password: { isValid: false, errMessage: [] },
  },
  userData: {
    username: '',
    password: '',
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionTypes.SET_USER_NAME:
      return {
        ...state,
        userData: { ...state.userData, username: action.payload },
        loginFormValidation: {
          ...state.loginFormValidation,
          username: { ...validateUserName({ ...state.loginFormValidation, username: action.payload }) },
        },
      };
    case LoginActionTypes.SET_PASSWORD:
      return {
        ...state,
        userData: { ...state.userData, password: action.payload},
        loginFormValidation: {
          ...state.loginFormValidation,
          password: { ...validatePassword({ ...state.loginFormValidation, password: action.payload }) },
        },
      };
    // case LoginActionTypes.VALIDATE_USER_NAME:
    //   return {
    //     ...state,
    //     loginFormValidation: {
    //   ...state.loginFormValidation,
    //       username: { ...validateUserName({...state.loginFormValidation, username: action.payload }) }
    //   }
    // };
    // case LoginActionTypes.VALIDATE_PASSWORD:
    //   return {
    //     ...state,
    //     loginFormValidation: {
    //   ...state.loginFormValidation,
    //       password: { ...validatePassword({...state.loginFormValidation, password: action.payload }) }
    //   }
    // };
    default:
      return state;
  }
};

export default loginReducer;