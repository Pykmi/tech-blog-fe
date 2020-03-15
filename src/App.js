import React from 'react';
/* import PropTypes from 'prop-types'; */
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faUser, faComments } from '@fortawesome/free-regular-svg-icons';

import Header from 'presentational/Header';
import { BodyRouter } from 'routes';

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

const App = () => (
  <Page>
    <Header />
    <Frame>
      <BodyRouter />
    </Frame>
  </Page>
);
 
export default App;
