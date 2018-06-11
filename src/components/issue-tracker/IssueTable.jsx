import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const IssueTable = (props) => {
  const getIssueRow = () => {
    const issueRow = props.issues.map(issue =>
      (<Table.Row key={issue._id} onClick={() => { props.handleEditIssue(issue); }} className="issue-table-row" title="click to edit issue">
        <Table.Cell>{issue._id}</Table.Cell>
        <Table.Cell>{issue.status}</Table.Cell>
        <Table.Cell>{issue.owner}</Table.Cell>
        <Table.Cell>{issue.effort}</Table.Cell>
        <Table.Cell>{issue.completionDate}</Table.Cell>
        <Table.Cell>{issue.title}</Table.Cell>
        <Table.Cell><Icon name="delete" onClick={(e) => { props.handleDeleteIssue(e, issue._id); }} /></Table.Cell>
      </Table.Row>
      ),
    );
    return issueRow;
  };
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Owner</Table.HeaderCell>
            <Table.HeaderCell>Effort</Table.HeaderCell>
            <Table.HeaderCell>Completion Date</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {getIssueRow()}
        </Table.Body>
      </Table>
    </div>
  );
};

export default IssueTable;
