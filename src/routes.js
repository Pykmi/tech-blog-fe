import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContentListing from 'presentational/ContentListing';
import BlogPost from 'presentational/BlogPost';
import withContent from 'hoc/withContent';

import * as actions from 'actions/content_actions';

export const BodyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={withContent(ContentListing, actions.fetch)} />
      <Route path="/category" component={withContent(ContentListing, actions.fetch)} />
      <Route path="/article/:name" component={withContent(BlogPost)} />
    </Switch>
  </Router>
);

