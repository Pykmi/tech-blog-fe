import React from 'react';
/* import PropTypes from 'prop-types'; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faUser, faComments } from '@fortawesome/free-regular-svg-icons';

import Articles from 'presentational/Articles';
import Article from 'presentational/Article';
import Category from 'presentational/Category';

library.add(faAngleRight, faComments, faUser);

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0px;
  width: 100%;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.breakPoints.desktop};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

/* const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 100%;
  background: #999;
`; */

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.headers};
  font-size: 2em;
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: relative;
  top: 80px;
  padding-bottom: 8px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-size: .9em;
  line-height: 18px;
`;

const Title = styled.div`
  font-family: ${props => props.theme.fonts.headers};
  font-size: 1.2em;
  margin-bottom: 16px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Item = styled.div`
  font-family: ${props => props.theme.fonts.headers};
  margin-left: 48px;
  font-size: .9em;
  text-align: right;
`;

const App = () => (
  <Page>
    <Frame>
      <Header>
        <Logo>pykmi.me</Logo>
        <FontAwesomeIcon size="2x" icon={['far', 'user']} />
      </Header>
      <div>
        <IntroContainer>
          <Intro>
            <Title>The Great Journey</Title>
            <TextBox>My work and lesson I have<br />learned on this journey.</TextBox>
          </Intro>
          <Menu>
            <Item>All</Item>
            <Item>Cloud</Item>
            <Item>Code</Item>
            <Item>Projects</Item>
          </Menu>
        </IntroContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route path="/article/:name" component={Article} />
            <Route path="/category/:name" component={Category} />
            {/* <Route exact path="/" render={() => <AllArticles content={this.props.articles} />} />
            <Route exact path="/category/:id" render={() => <Category content={this.props.articles} />} /> */}
          </Switch>
        </Router>
      </div>
    </Frame>
  </Page>
);
 
export default App;
