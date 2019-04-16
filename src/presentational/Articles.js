import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withContent from 'hoc/withContent';
import ArticleCompact from 'presentational/ArticleCompact';

const Container = styled.div`
  display: flex;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Articles = (props) => (
  <Container>
    {Object.keys(props.content).map((url) => <ArticleCompact content={props.content[url]} key={props.content[url]._id} />)}
  </Container>
);

Articles.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withContent(Articles);
