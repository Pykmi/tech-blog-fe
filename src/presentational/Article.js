import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContent from 'hoc/withContent';

const Container = styled.div`
  display: flex;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Article = (props) => (
  <Container>
    <div>{props.title}</div>
  </Container>
);

Article.propTypes = {
  title: PropTypes.string.isRequired
};
 
export default withContent(Article);
