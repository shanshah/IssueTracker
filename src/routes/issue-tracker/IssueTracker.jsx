import React, { Component } from 'react';
import { Header, Loader, Grid, Button } from 'semantic-ui-react';
import IssueTrackerServices from '../../services/issue-tracker/IssueTrackerServices';
import '../../stylesheets/components/issue-tracker/issue-tracker.css';
import IssueTable from '../../components/issue-tracker/IssueTable';
import IssueAdd from '../../components/issue-tracker/IssueAdd';
import  { connect } from 'react-redux';
import { IssueTrackerActions } from '../../actions/issue-tracker/IssueTrackerActions';
import IssueFilter from '../../components/issue-tracker/IssueFilter';
import IssueEdit from '../../components/issue-tracker/IssueEdit';
import Pagination from '../../components/common/Pagination';
import 'react-datepicker/dist/react-datepicker.css';

@connect((store) => ({issueTracker: store.issueTracker}))
class IssueTracker extends React.Component {
  state = {
    isIssueAddModalOpen: false,
  };
  componentDidMount() {
    this.props.dispatch(IssueTrackerActions.getIssueData());
  }

  componentDidUpdate(prevProps) {
    const oldQuery = prevProps.location.query;
    const newQuery = this.props.location.query;
    if (oldQuery.status === newQuery.status) {
      return;
    }
    if(this.props.location.query) {
        this.props.dispatch(IssueTrackerActions.getIssueData(this.props.location.query));
    } else {
      this.props.dispatch(IssueTrackerActions.getIssueData());
    }
  }
  
  handleAddIssueStatus = (issueStatus) => {
    console.log(issueStatus);
    this.props.dispatch(IssueTrackerActions.setIssueStatus(issueStatus));
  };
  
  handleAddIssueOwner = (issueOwner) => {
    console.log(issueOwner);
    this.props.dispatch(IssueTrackerActions.setIssueOwner(issueOwner));
  };
  
  handleAddIssueEffort = (issueEffort) => {
    console.log(issueEffort);
    this.props.dispatch(IssueTrackerActions.setIssueEffort(issueEffort));
  };
  
  handleAddIssueCompletionDate = (d) => {
    console.log(d);
    this.props.dispatch(IssueTrackerActions.setIssueCompletionDate(d));
  };
  
  handleAddIssueTitle = (issueTitle) => {
    this.props.dispatch(IssueTrackerActions.setIssueTitle(issueTitle))
  };
  
  handleIssueAdd = () => {
    this.props.dispatch(IssueTrackerActions.submitNewIssue());
    this.closeIssueAddModal();
  };
  
  handleDeleteIssue = (e, issueId) => {
    e.stopPropagation();
    this.props.dispatch(IssueTrackerActions.deleteIssue(issueId));
    IssueTrackerServices.submitIssueIdToBeDeleted(issueId).then(res => console.log(res))
      .catch(error => console.log('Could not fetch issues data', error));
  };
  
  handleUpdateIssue = (issue) => {
    this.props.dispatch(IssueTrackerActions.updateIssue(issue));
  };
  
  handleEditIssue = (issue) => {
    this.props.dispatch(IssueTrackerActions.editIssue(issue));
  };
  
  closeIssueEditModal = (e) => {
    this.props.dispatch(IssueTrackerActions.closeIssueEditModal());
  };
  
  handleIssueAddModal = () => {
    this.setState({isIssueAddModalOpen: true});
  };
  
  handleEditIssueStatus = (issueStatus) => {
    this.props.dispatch(IssueTrackerActions.editIssueStatus(issueStatus));
  };
  handleEditIssueOwner = (issueOwner) => {
    this.props.dispatch(IssueTrackerActions.editIssueOwner(issueOwner));
  };
  handleEditIssueEffort = (issueEffort) => {
    this.props.dispatch(IssueTrackerActions.editIssueEffort(issueEffort));
  };
  handleEditIssueCompletionDate = (issueCompletionDate) => {
    this.props.dispatch(IssueTrackerActions.editIssueCompletionDate(issueCompletionDate));
  };
  handleEditIssueTitle = (issueTitle) => {
    this.props.dispatch(IssueTrackerActions.editIssueTitle(issueTitle));
  };
  
  handleIssueUpdate = () => {
    this.props.dispatch(IssueTrackerActions.updateIssue());
    this.closeIssueEditModal();
  };
  
  closeIssueAddModal = () => {
    this.setState({isIssueAddModalOpen: false});
  };
  
  render () {
    return (
      <div>
        <Header textAlign="center" as="h2">Issue Tracker</Header>
        <Grid style={{ padding: 20 }}>
          <Grid.Row>
            <Grid.Column computer={14}>
              <IssueFilter />
            </Grid.Column>
            <Grid.Column computer={2}>
              <Button floated="right" onClick={() =>{this.handleIssueAddModal()}}>Create Issue</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        {/*{Object.keys(this.props.issueTracker.issueList).length > 0 ? <IssueTable issues={this.props.issueTracker.issueList.issues} /> : <Loader /> }*/}
        {this.props.issueTracker.isLoading? <div style={{height: 100}}><Loader active inline='centered'>Loading</Loader></div> :
          (Object.keys(this.props.issueTracker.issueList).length > 0 ?
            <IssueTable
              issues={this.props.issueTracker.issueList.issues}
              handleDeleteIssue={this.handleDeleteIssue}
              handleUpdateIssue={this.handleUpdateIssue}
              handleEditIssue={this.handleEditIssue}
            /> :
            <div>Failed to fetch data</div>)
        }
        <IssueAdd
          selectedDate={this.props.issueTracker.newIssue.completionDate}
          isIssueAddModalOpen={this.state.isIssueAddModalOpen}
          closeIssueAddModal={this.closeIssueAddModal}
          handleAddIssueStatus={this.handleAddIssueStatus}
          handleAddIssueOwner={this.handleAddIssueOwner}
          handleAddIssueTitle={this.handleAddIssueTitle}
          handleAddIssueEffort={this.handleAddIssueEffort}
          handleAddIssueCompletionDate={this.handleAddIssueCompletionDate}
          handleIssueAdd={this.handleIssueAdd}
        />
        <IssueEdit
          isEditModalOpen={this.props.issueTracker.isEditModalOpen}
          issueToBeUpdated={ this.props.issueTracker.issueToBeUpdated }
          closeIssueEditModal={this.closeIssueEditModal}
          handleEditIssueStatus={this.handleEditIssueStatus}
          handleEditIssueOwner={this.handleEditIssueOwner}
          handleEditIssueEffort={this.handleEditIssueEffort}
          handleEditIssueCompletionDate={this.handleEditIssueCompletionDate}
          handleEditIssueTitle={this.handleEditIssueTitle}
          handleUpdateIssue={this.handleIssueUpdate}
        />
        {/*<Pagination />*/}
      </div>
    );
  }
}

export default IssueTracker;
