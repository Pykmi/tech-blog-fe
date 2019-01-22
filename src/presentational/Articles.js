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
    {props.content.map((article) => (
      <ArticleCompact data={article} key={article._id} />
    ))}
  </Container>
);

Articles.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default withContent(Articles);