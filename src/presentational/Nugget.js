import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeURL } from 'utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.gray07};
  width: 340px;
  margin-bottom: 40px;
  margin-left: 40px;

  :nth-child(3n+1) {
    margin-left: 0;
    margin-right: 40px;
  }

  :nth-child(3n+2) {
    margin-left: 0;
    margin-right: 0;
  }

  :nth-child(3n+3) {
    margin-left: 40px;
    margin-right: 0;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 224px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  line-height: 16px;
`;

const Title = styled.div`
  font-family: ${props => props.theme.fonts.headers};
  font-size: 1.1em;
`;

const Details = styled.div`
  display: flex;
  position: relative;
  top: 4px;
  width: 100%;
  line-height: 16px;
`;

const Item = styled.div`
  font-size: .7em;
  border-left: 1px solid ${props => props.theme.colors.gray05};
  padding-left: 8px;
  padding-right: 8px;

  :first-child {
    border-left: none;
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`;

const Body = styled.div`
  position: relative;
  top: 12px;
  font-size: .8em;
  width: 100%;
  line-height: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 24px;
  width: 100%;
  margin-bottom: 20px;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.headers};
  font-size: .7em;
  height: 30px;
`;

const FooterIcon = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  color: ${props => props.theme.colors.gray04};
  margin-left: 8px;
`;

const Nugget = ({ content }) => {
  const { category, image, modified_at, smalltext, title, url } = content;

  return (
    <Container>
      <Image src={`/${image}`} />
      <Text>
        <Title>{title}</Title>
        <Details>
          <Item>{moment(modified_at).format('MMMM Do, YYYY')}</Item>
          <Item>Category: <Link to={makeURL('/category', category)}>{category}</Link></Item>
        </Details>
        <Body>{smalltext}</Body>
        <Footer>
          <FooterItem>
            <span><Link to={makeURL('/article', url)}>Read More</Link></span>
            <FooterIcon><FontAwesomeIcon icon="angle-right" /></FooterIcon>
          </FooterItem>
          <FooterItem>
            
          </FooterItem>
        </Footer>
      </Text>
    </Container>
  );
};

Nugget.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Nugget;
