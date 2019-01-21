import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticleCompact from 'presentational/ArticleCompact';

const Container = styled.div`
  display: flex;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const AllArticles = (props) => (
  <Container>
    {props.articles.map((article) => (
      <ArticleCompact data={article} key={article._id} />
    ))}
  </Container>
);

AllArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any).isRequired
};
 
export default AllArticles;
