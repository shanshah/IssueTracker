import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import App from './App';
// import IssueTracker from './routes/issue-tracker/IssueTracker';
// import QuizPage from './routes/quiz/QuizWelcomePage';
// import QuizMainPage from './routes/quiz/QuizMainPage';
// import Register from './routes/register/Register';
// import IssueEdit from './components/issue-tracker/IssueEdit';

import Loadable from 'react-loadable';

function MyLoadingComponent() {
  return <div>Loading...</div>;
};

const App = Loadable({
  loader: () => import('./App'),
  loading: MyLoadingComponent,
});

const IssueTracker = Loadable({
  loader: () => import('./routes/issue-tracker/IssueTracker'),
  loading: MyLoadingComponent,
});

const IssueEdit = Loadable({
  loader: () => import('./components/issue-tracker/IssueEdit'),
  loading: MyLoadingComponent,
});

const QuizPage = Loadable({
  loader: () => import('./routes/quiz/QuizMainPage'),
  loading: MyLoadingComponent,
});

const QuizMainPage = Loadable({
  loader: () => import('./routes/quiz/QuizMainPage'),
  loading: MyLoadingComponent,
});

const Register = Loadable({
  loader: () => import('./routes/register/Register'),
  loading: MyLoadingComponent,
});

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/issues" component={IssueTracker} />
        <Route path="/issue-edit/:id" component={IssueEdit} />
        <Route path="/quiz-welcome-page" component={QuizPage} />
        <Route path="/quiz-main-page" component={QuizMainPage} />
        <Route path="/user-registration" component={Register} />
      </Router>
    );
  }
}

export default Routes;
