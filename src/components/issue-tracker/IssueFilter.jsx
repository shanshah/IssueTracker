import React, { Component } from 'react';
import { Link } from 'react-router';

const IssueFilter = () => {
  const Separator = () => <span> | </span>;
  return (
    <div style={{ paddingBottom: 10 }}>
      <Link to="/issues">All Issues</Link>
      <Separator />
      <Link to="/issues?status=Open">Open Issues</Link>
      <Separator />
      <Link to="/issues?status=New">New Issues</Link>
    </div>
  );
};

export default IssueFilter;
