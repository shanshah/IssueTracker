import React, { Component } from 'react';
import { Grid, Header, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

const QuizPage = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column computer={8}>
        <Header as="h1">GK QUIZ</Header>
        <List>
          <List.Item>
            <List.Icon name="pointing right" />
            <List.Content>
              <List.Description>All question has four answer.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="pointing right" />
            <List.Content>
              <List.Description>Only one answer is correct.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="pointing right" />
            <List.Content>
              <List.Description>You must select at least one answer to continue.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="pointing right" />
            <List.Content>
              <List.Description>Click on Get start button bellow to start the quiz.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="pointing right" />
            <List.Content>
              <List.Description>Once you complete the quiz you can see quiz result.</List.Description>
            </List.Content>
          </List.Item>
        </List>
        <Button>
          <Link to="/quiz-main-page">Get started</Link>
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


// class QuizPage extends React.Component {
//   render() {
//
//   }
// }

export default QuizPage;
