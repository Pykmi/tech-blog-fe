import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: center;
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.headers};
  font-weight: 200;
  font-size: 4em;
  color: #666;
  text-align: center;
`;

const H2 = styled(H1)`
  font-size: 2.8em;
`;

const NoContent = () => (
  <Container>
    <H1>404</H1>
    <H2>No Resources Found</H2>
  </Container>
);
 
export default NoContent;