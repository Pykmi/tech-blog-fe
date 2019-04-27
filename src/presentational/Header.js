import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EBEBEB;
  width: 100%;
  border-bottom: 1px solid #D8D8D8;
  padding: 0px 48px;
  height: 70px;
`;

const Title = styled.div`
  font-family: ${props => props.theme.fonts.headers};
  font-weight: 200;
  font-size: 1.8em;
  color: #444;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Item = styled.div`
  margin-left: ${props => props.first ? '24px' : '48px'};
  padding-right: ${props => props.separator ? '24px' : '0'};
  font-size: .9em;
  font-weight: ${props => props.heavy ? 700 : 400};
  border-right: ${props => props.separator ? '2px solid #999' : 'none'};
  text-align: right;
  color: #666;
`;

const Header = () => (
  <Container>
    <Title>Pykmi.me</Title>
    <Menu>
      <Item>About</Item>
      <Item separator>LinkedIn</Item>
      <Item heavy first>All</Item>
      <Item>Cloud</Item>
      <Item>Code</Item>
      <Item>Projects</Item>
      <Item>Reviews</Item>
    </Menu>
  </Container>
);
 
export default Header;