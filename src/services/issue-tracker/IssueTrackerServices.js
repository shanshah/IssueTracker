import 'whatwg-fetch';

const IssueTrackerServices = {
  fetchIssueList: url =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  postNewIssue: newIssue =>
    fetch('/add-issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIssue),
    }),
  submitIssueToBeUpdated: (issueToBeUpdated) => {
    fetch('/update-issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ issueToBeUpdated }),
    });
  },
  submitIssueIdToBeDeleted: issueId =>
    fetch('/delete-issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ issueId }),
    }),
};

export default IssueTrackerServices;
