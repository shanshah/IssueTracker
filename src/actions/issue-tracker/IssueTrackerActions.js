import IssueTrackerServices from '../../services/issue-tracker/IssueTrackerServices';

const IssueTrackerActionTypes = {
  SET_ISSUE_STATUS: 'SET_ISSUE_STATUS',
  SET_ISSUE_OWNER: 'SET_ISSUE_OWNER',
  SET_ISSUE_EFFORT: 'SET_ISSUE_EFFORT',
  SET_ISSUE_COMPLETION_DATE: 'SET_ISSUE_COMPLETION_DATE',
  SET_ISSUE_TITLE: 'SET_ISSUE_TITLE',
  SET_ISSUE_LIST: 'SET_ISSUE_LIST',
  DELETE_ISSUE: 'DELETE_ISSUE',
  EDIT_ISSUE: 'UPDATE_ISSUE',
  EDIT_ISSUE_STATUS: 'EDIT_ISSUE_STATUS',
  EDIT_ISSUE_OWNER: 'EDIT_ISSUE_OWNER',
  EDIT_ISSUE_EFFORT: 'EDIT_ISSUE_EFFORT',
  EDIT_ISSUE_COMPLETION_DATE: 'EDIT_ISSUE_COMPLETION_DATE',
  EDIT_ISSUE_TITLE: 'EDIT_ISSUE_TITLE',
  CLOSE_ISSUE_EDIT_MODAL: 'CLOSE_ISSUE_EDIT_MODAL',
};

const IssueTrackerActions = {
  setIssueStatus: issueStatus => ({
    type: IssueTrackerActionTypes.SET_ISSUE_STATUS, payload: issueStatus,
  }),
  setIssueOwner: issueOwner => ({
    type: IssueTrackerActionTypes.SET_ISSUE_OWNER, payload: issueOwner,
  }),
  setIssueEffort: issueEffort => ({
    type: IssueTrackerActionTypes.SET_ISSUE_EFFORT, payload: issueEffort,
  }),
  setIssueCompletionDate: issueCompletionDate => ({
    type: IssueTrackerActionTypes.SET_ISSUE_COMPLETION_DATE, payload: issueCompletionDate,
  }),
  setIssueTitle: issueTitle => ({
    type: IssueTrackerActionTypes.SET_ISSUE_TITLE, payload: issueTitle,
  }),
  setIssueList: issueList => ({
    type: IssueTrackerActionTypes.SET_ISSUE_LIST, payload: issueList,
  }),
  deleteIssue: issueId => ({
    type: IssueTrackerActionTypes.DELETE_ISSUE, payload: issueId,
  }),
  editIssue: payload => ({
    type: IssueTrackerActionTypes.EDIT_ISSUE,
    payload: { isEditModalOpen: true, issueToBeUpdated: payload },
  }),
  editIssueStatus: editedIssueStatus => ({
    type: IssueTrackerActionTypes.EDIT_ISSUE_STATUS, payload: editedIssueStatus,
  }),
  editIssueOwner: editedIssueOwner => ({
    type: IssueTrackerActionTypes.EDIT_ISSUE_OWNER, payload: editedIssueOwner,
  }),
  editIssueEffort: editedIssueEffort => ({
    type: IssueTrackerActionTypes.EDIT_ISSUE_EFFORT, payload: editedIssueEffort,
  }),
  editIssueCompletionDate: editedIssueCompletionDate => ({
    type: IssueTrackerActionTypes.EDIT_ISSUE_COMPLETION_DATE, payload: editedIssueCompletionDate,
  }),
  editIssueTitle: editedIssueTitle => ({
    type: IssueTrackerActionTypes.EDIT_ISSUE_TITLE, payload: editedIssueTitle,
  }),
  closeIssueEditModal: () => ({
    type: IssueTrackerActionTypes.CLOSE_ISSUE_EDIT_MODAL, payload: false,
  }),
  getIssueData: query => (dispatch) => {
    let url = '/get-issues';
    if (query && query.status) {
      url = `${url}?status=${query.status}`;
    }
    IssueTrackerServices.fetchIssueList(url).then(res => res.json())
      .then((issueList) => {
        dispatch(IssueTrackerActions.setIssueList(issueList));
      })
      .catch(error => console.log('Could not fetch issues data', error));
  },

  submitNewIssue: () => (dispatch, getState) => {
    const newIssueToBeAdded = getState().issueTracker.newIssue;
    IssueTrackerServices.postNewIssue(newIssueToBeAdded);
  },
  updateIssue: () => (dispatch, getState) => {
    const issueToBeUpdated = getState().issueTracker.issueToBeUpdated;
    IssueTrackerServices.submitIssueToBeUpdated(issueToBeUpdated);
    // .then(res => res.json()).then()
    // .catch(error => console.log('Error while updating issue', error));
  },
};

export {
  IssueTrackerActionTypes,
  IssueTrackerActions,
};
