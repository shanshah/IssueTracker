import {combineReducers} from 'redux';
import login from './login/LoginReducer';
import register from './register/RegisterReducer';
import issueTracker from './issue-tracker/IssueTrackerReducer';

export default combineReducers({
  login,
  register,
  issueTracker,
});

