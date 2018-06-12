const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// var mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://shanshah:shaan78@ds249818.mlab.com:49818/issues-db';
let issuesDatabase;
app.use('/', express.static(__dirname));
app.use(bodyParser.json());

MongoClient.connect(url, (err, database) => {
  if (err) throw err
  issuesDatabase = database.db('issues-db');
  app.listen(4000);
});

app.post('/register', (request, response) => {
  response.sendStatus(200);
});

app.get('/get-issues', (req, res) => {
  const filter = {};
  if (req.query.status) {
    filter.status = req.query.status;
  }

  issuesDatabase.collection('issues').find(filter).toArray().then((issues) => {
    if (issues.length > 0) {
      const metadata = { total_count: issues.length };
      res.json({ _metadata: metadata, issues });
      res.status(200);
    } else {
      res.send('No issue to display');
    }
  })
    .catch(err =>
      res.status(500).json({ message: `Internal Server Error: ${err}` }),
    );
});

app.post('/add-issue', (req, res) => {
  const newIssue = req.body;
  issuesDatabase.collection('issues').insertOne(newIssue, (err, ) => {
    if (err) throw err;
  });
  res.sendStatus(200);
});

app.post('/delete-issue', (req, res) => {
  const { issueId } = req.body;
  if (issueId) {
    issuesDatabase.collection('issues').deleteOne({ '_id': ObjectId(issueId) }).then((err) => {
      console.log(err);
      res.json({ status: 200, statusText: 'OK' });
    });
  }
});

app.post('/update-issue', (req) => {
  const requestedData = req.body.issueToBeUpdated;
  const updatedValues = {
    $set: {
      status: requestedData.status,
      owner: requestedData.owner,
      effort: requestedData.effort,
      completionDate: requestedData.completionDate,
      title: requestedData.title,
    },
  };
  issuesDatabase.collection('issues').update({ '_id': ObjectId(requestedData.issueId) }, updatedValues, function(err, updateResponse) {
    if (err) throw err;
    console.log(`${updateResponse.result.nModified} document updated`);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
