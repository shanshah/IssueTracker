import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Button, Grid, Form, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import ErrorMessageInput from '../common/ErrorMessage';

const IssueAdd = (props) => {
  console.log(props.issueFormValidation.owner.isValid);
  IssueAdd.PropTypes = {
    selectedDate: PropTypes.object,
    handleIssueOwner: PropTypes.func,
    handleIssueTitle: PropTypes.func,
    handleIssueEffort: PropTypes.func,
    handleAddIssueCompletionDate: PropTypes.func,
    closeIssueAddModal: PropTypes.func,
    handleIssueAdd: PropTypes.func,
    isIssueAddModalOpen: PropTypes.bool,
    issueFormValidation: PropTypes.object,
  };
  return (<Modal size="small" open={props.isIssueAddModalOpen}>
    <Modal.Content image>
      <Form style={{ width: '100%' }}>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="issue-status">Status</label>
            <select
              placeholder="Issue Status"
              type="text"
              name="status"
              onChange={(e) => { props.handleAddIssueStatus(e.target.value); }}
            >
              <option>New</option>
              <option>Assigned</option>
              <option>In Progress</option>
              <option>Fixed</option>
              <option>Closed</option>
            </select>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="issue-owner">Owner</label>
            <input
              type="text"
              onChange={(e) => { props.handleAddIssueOwner(e.target.value); }}
            />
            { props.issueFormValidation.owner.errMessage.length > 0 &&
              <ErrorMessageInput
                errorMessage={props.issueFormValidation.owner.errMessage}
              />
            }
          </Form.Field>
          <Form.Field>
            <label htmlFor="issue-effort">Effort</label>
            <input
              placeholder="Issue Effort"
              type="text"
              name="effort"
              onChange={(e) => { props.handleAddIssueEffort(e.target.value); }}
            />
            { props.issueFormValidation.effort.errMessage.length > 0 &&
              <ErrorMessageInput
                errorMessage={props.issueFormValidation.effort.errMessage}
              />
            }
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="completion-date">Completion date</label>
            <DatePicker
              placeholder="Completion Date"
              selected={props.selectedDate}
              onChange={(date) => { props.handleAddIssueCompletionDate(date); }}
            />
            {/*{ props.issueFormValidation.completionDate.errMessage.length > 0 &&*/}
              {/*<ErrorMessageInput*/}
                {/*errorMessage={props.issueFormValidation.completionDate.errMessage}*/}
              {/*/>*/}
            {/*}*/}
          </Form.Field>
          <Form.Field>
            <label htmlFor="issue-title">Issue title</label>
            <input
              placeholder="Issue Title"
              type="text"
              name="title"
              onChange={(e) => { props.handleAddIssueTitle(e.target.value); }}
            />
            { props.issueFormValidation.title.errMessage.length > 0 &&
              <ErrorMessageInput
                errorMessage={props.issueFormValidation.title.errMessage}
              />
            }
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Button onClick={() => { props.handleIssueAdd (); }}>Add issue</Button>
          <Button onClick={() => { props.closeIssueAddModal(); }}>Cancel</Button>
        </Form.Field>
      </Form>
    </Modal.Content>
  </Modal>);
};

export default IssueAdd;

