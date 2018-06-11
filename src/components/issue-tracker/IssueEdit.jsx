import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const IssueEditModal = (props) => {
  IssueEditModal.PropTypes = {
    isEditModalOpen: PropTypes.bool,
    issueToBeUpdated: PropTypes.object,
    handleEditIssueStatus: PropTypes.func,
    handleEditIssueOwner: PropTypes.func,
    handleEditIssueEffort: PropTypes.func,
    handleEditIssueCompletionDate: PropTypes.func,
    handleEditIssueTitle: PropTypes.func,
  };
  // console.log(props.issueToBeUpdated);
  const { status, owner, effort, completionDate, title } = props.issueToBeUpdated;
  return (<Modal size="small" open={props.isEditModalOpen}>
    <Modal.Content image>
      <Form style={{ width: '100%' }}>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="issue-status">Status</label>
            <select
              value={status}
              onChange={(e) => { props.handleEditIssueStatus(e.target.value); }}
              style={{ height: 38 }}
            >
              <option>New</option>
              <option>Assigned</option>
              <option>In Progress</option>
              <option>Fixed</option>
              <option>Closed</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label htmlFor="issue-owner">Owner</label>
            <input
              type="text"
              value={owner}
              onChange={(e) => { props.handleEditIssueOwner(e.target.value); }}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="issue-effort">Effort</label>
            <input
              type="text"
              value={effort}
              onChange={(e) => { props.handleEditIssueEffort(e.target.value); }} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="completion-date">Completion Date</label>
            <input
              type="text"
              value={completionDate}
              onChange={(e) => { props.handleEditIssueCompletionDate(e.target.value); }} />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label htmlFor="issue-title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => { props.handleEditIssueTitle(e.target.value); }}
          />
        </Form.Field>
        <Form.Field>
          <Button onClick={() => { props.handleUpdateIssue(); } }>Update</Button>
          <Button onClick={(e) => { props.closeIssueEditModal(e); }}>X</Button>
        </Form.Field>
      </Form>
    </Modal.Content>
  </Modal>);
};
export default IssueEditModal;
