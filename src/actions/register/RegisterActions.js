import { hashHistory } from 'react-router';

const RegisterActionTypes = {
  SET_USER_NAME: 'Login/SET_USER_NAME',
  SET_EMAIL: 'Login/VALIDATE_PASSWORD',
  SET_PASSWORD: 'Login/SET_PASSWORD',
  SET_CONFIRM_PASSWORD: 'Login/SET_CONFIRM_PASSWORD',
};

const RegisterActions = {
  setUserName: userName => ({ type: RegisterActionTypes.SET_USER_NAME, payload: userName }),
  setEmail: email => ({ type: RegisterActionTypes.SET_EMAIL, payload: email }),
  setPassword: password => ({ type: RegisterActionTypes.SET_PASSWORD, payload: password }),
  setConfirmPassword: confirmPassword => ({ type: RegisterActionTypes.SET_CONFIRM_PASSWORD, payload: confirmPassword }),
  submitRegisterData: (dispatch, getState) => {
    const userRegistrationData = getState().register.userData;
    // fetch('/register', {
    //   method: 'POST',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userRegistrationData),
    // })
    //   .then((response) => {
    //     // console.log(response);
    //     if (response.status === 200) {
    //       hashHistory.push('/quiz-welcome-page');
    //     }
    //   })
    //   .catch(error =>
    //     console.log('some thing went wrong, please try again later', error),
    //   );
  },
};

export {
  RegisterActionTypes,
  RegisterActions,
};

