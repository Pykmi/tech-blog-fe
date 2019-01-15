import React from 'react';
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

class Articles extends React.Component {
  render() {
    return (
      <Container>
        <ArticleCompact
          author="Tomi Kaistila"
          category="Cloud"
          image="cloud.jpg"
          published="November 1st, 2018"
          title="Azure Web Apps for Containers"
        />
        <ArticleCompact
          author="Tomi Kaistila"
          category="Code"
          image="htmlcode.jpg"
          published="November 1st, 2018"
          title="Code Standards"
        />
        <ArticleCompact
          author="Tomi Kaistila"
          category="Code"
          image="golang.png"
          published="November 1st, 2018"
          title="Read JSON with Go"
        />{/*
        <ArticleCompact
          author="Tomi Kaistila"
          category="Code"
          image="nodejs.png"
          published="November 1st, 2018"
          title="Building Backends with Node.js"
        />
        <ArticleCompact
          author="Tomi Kaistila"
          category="Code"
          image="servers.jpg"
          published="November 1st, 2018"
          title="Building Backends with Go"
        />
        <ArticleCompact
          author="Tomi Kaistila"
          category="Cloud"
          image="cloud.jpg"
          published="November 1st, 2018"
          title="Azure Web Apps for Containers"
        />
        <ArticleCompact
          author="Tomi Kaistila"
          category="Cloud"
          image="cloud.jpg"
          published="November 1st, 2018"
          title="Azure Web Apps for Containers"
        /> */}
      </Container>
    );
  }
}
 
export default Articles;
