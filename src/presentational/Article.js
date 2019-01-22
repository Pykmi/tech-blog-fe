import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withRecent from 'hoc/withRecent';

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
    <div>{props.content.title}</div>
  </Container>
);

Article.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired
};
 
export default withRecent(Article);
