import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContentListing from 'presentational/ContentListing';
import BlogPost from 'presentational/BlogPost';
import withContent from 'hoc/withContent';

import * as action from 'actions/content_actions';

const STAGE = process.env.REACT_APP_STAGE;

const fetch = {
  All: STAGE === 'production' ? action.fetch : action.fetchAllMockUp,
  One: STAGE === 'production' ? action.fetchOne : action.fetchOneMockUp,
};

export const BodyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={withContent(ContentListing, fetch.All)} />
      <Route path="/category" component={withContent(ContentListing, fetch.All)} />
      <Route path="/article/:name" component={withContent(BlogPost, fetch.One)} />
    </Switch>
  </Router>
);

