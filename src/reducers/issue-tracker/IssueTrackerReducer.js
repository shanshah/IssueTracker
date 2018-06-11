import { IssueTrackerActionTypes } from '../../actions/issue-tracker/IssueTrackerActions';
// import { validateUserName, validatePassword } from '../../scripts/LoginFormValidation';
import moment from 'moment';

const initialState = {
  issueList: {},
  isLoading: true,
  isEditModalOpen: false,
  issueToBeUpdated: {
    issueId: '',
    status: '',
    owner: '',
    effort: '',
    completionDate: '',
    title: '',
  },
  newIssue: {
    status: '',
    owner: '',
    effort: '',
    completionDate: moment(),
    title: '',
  },
};

const issueTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case IssueTrackerActionTypes.SET_ISSUE_STATUS:
      return {
        ...state,
        newIssue: {
          ...state.newIssue, status: action.payload,
        },
      };
    case IssueTrackerActionTypes.SET_ISSUE_OWNER:
      return {
        ...state,
        newIssue: { ...state.newIssue, owner: action.payload },
      };
    case IssueTrackerActionTypes.SET_ISSUE_EFFORT:
      return {
        ...state,
        newIssue: { ...state.newIssue, effort: action.payload },
        // loginFormValidation: {
        // ...state.loginFormValidation,
        // username: {...validateUserName({...state.loginFormValidation, username: action.payload})}
        // }
      };
    case IssueTrackerActionTypes.SET_ISSUE_COMPLETION_DATE:
      return {
        ...state,
        newIssue: { ...state.newIssue, completionDate: action.payload },
      };
    case IssueTrackerActionTypes.SET_ISSUE_TITLE:
      return {
        ...state,
        newIssue: { ...state.newIssue, title: action.payload },
        // loginFormValidation: {
        // ...state.loginFormValidation,
        // password: {...validatePassword({...state.loginFormValidation, password: action.payload})}
        // }
      };
    case IssueTrackerActionTypes.SET_ISSUE_LIST:
      return {
        ...state,
        isLoading: false,
        issueList: action.payload,
      };
    case IssueTrackerActionTypes.DELETE_ISSUE:
      const { issues } = state.issueList;
      const stateAfterDelete = issues.filter(issue => issue._id !== action.payload);
      return {
        ...state,
        issueList: { issues: stateAfterDelete },
      };
    case IssueTrackerActionTypes.EDIT_ISSUE:
      return {
        ...state,
        isEditModalOpen: action.payload.isEditModalOpen,
        // issueToBeUpdated: action.payload.issueToBeUpdated,
        issueToBeUpdated: {
          ...state.issueToBeUpdated,
          issueId: action.payload.issueToBeUpdated._id,
          status: action.payload.issueToBeUpdated.status,
          owner: action.payload.issueToBeUpdated.owner,
          effort: action.payload.issueToBeUpdated.effort,
          completionDate: action.payload.issueToBeUpdated.completionDate,
          title: action.payload.issueToBeUpdated.title,
        },
      };
    case IssueTrackerActionTypes.CLOSE_ISSUE_EDIT_MODAL:
      return {
        ...state,
        isEditModalOpen: action.payload,
      };
    case IssueTrackerActionTypes.EDIT_ISSUE_STATUS:
      return {
        ...state,
        issueToBeUpdated: { ...state.issueToBeUpdated, status: action.payload },
      };
    case IssueTrackerActionTypes.EDIT_ISSUE_OWNER:
      return {
        ...state,
        issueToBeUpdated: { ...state.issueToBeUpdated, owner: action.payload },
      };
    case IssueTrackerActionTypes.EDIT_ISSUE_EFFORT:
      return {
        ...state,
        issueToBeUpdated: { ...state.issueToBeUpdated, effort: action.payload },
      };
    case IssueTrackerActionTypes.EDIT_ISSUE_COMPLETION_DATE:
      return {
        ...state,
        issueToBeUpdated: { ...state.issueToBeUpdated, completionDate: action.payload },
      };
    case IssueTrackerActionTypes.EDIT_ISSUE_TITLE:
      return {
        ...state,
        issueToBeUpdated: { ...state.issueToBeUpdated, title: action.payload },
      };
    default:
      return state;
  }
};

export default issueTrackerReducer;
