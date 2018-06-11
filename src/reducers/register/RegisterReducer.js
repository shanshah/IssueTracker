import { RegisterActionTypes } from '../../actions/register/RegisterActions';
import { validateUserName, validatePassword } from '../../scripts/LoginFormValidation';

const initialState = {
  loginFormValidation: {
    username : { isValid: false, errMessage: [] },
    password: { isValid: false, errMessage: [] },
    confirmPassword: { isValid: false, errMessage: [] },
    email: { isValid: false, errMessage: [] },
  },
  userData: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RegisterActionTypes.SET_USER_NAME:
      return { ...state, userData: { ...state.userData, username: action.payload }};
    case RegisterActionTypes.SET_EMAIL:
      return { ...state, userData: { ...state.userData, email: action.payload }};
    case RegisterActionTypes.SET_PASSWORD:
      return {...state, userData: { ...state.userData, password: action.payload}};
    case RegisterActionTypes.SET_CONFIRM_PASSWORD:
      return {...state, userData: { ...state.userData, confirmPassword: action.payload}};
      
    // case RegisterActionTypes.VALIDATE_USER_NAME:
    //   return {
    //     ...state,
    //     loginFormValidation: {
    //       ...state.loginFormValidation,
    //       username: {...validateUserName({...state.loginFormValidation, username: action.payload})}
    //     }
    //   };
    // case LoginActionTypes.VALIDATE_PASSWORD:
    //   return {
    //     ...state,
    //     loginFormValidation: {
    //       ...state.loginFormValidation,
    //       password: {...validatePassword({...state.loginFormValidation, password: action.payload})}
    //     }
    //   };
    default:
      return state;
  }
};

export default registerReducer;