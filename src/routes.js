import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContentListing from 'presentational/ContentListing';
import withContent from 'hoc/withContent';

export const BodyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={withContent(ContentListing)} />
      <Route path="/category" component={withContent(ContentListing)} />
      {/* <Route path="/post/:name" component={Article} /> */}
    </Switch>
  </Router>
);

