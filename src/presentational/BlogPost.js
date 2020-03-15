import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import { marked } from 'mocks/markdown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: center;
`;

const Title = styled.h1`
  color: #FF7200;
  font-size: 2.4rem;
`;

const PostedDate = styled.h4`
  color: rgba(50,93,118,0.7);
`;

const Markdown = styled.div`
  & > p, br, blockquote, ul {
    line-height: 24px;
    margin-bottom: 12px;
  }
  
  & > p {
    font-size: 1rem;
    color: #666;
  }

  & > h1, h2, h3 {
    color: #666;
    margin-top: 10px;
    margin-bottom: 4px;
  }
  
  & > h1 {
    font-size: 1.9rem;
  }
  
  & > blockquote {
    border-left: .5em solid #CCC;
    padding-left: 45px;
  }
  
  & > pre {
    border: 1px solid #CCC;
    padding: 8px !important;
    margin: 0 24px 12px; 24px;
    width: auto;
    font-size: .8rem;
  }
  
  & > ul {
    padding-inline-start: 40px;
  }
  
  & > a {
    color: #259dff;
    text-decoration: none;
    border-bottom: 1px dotted #259dff;
  }
  
  & > table, tr, td {
    border: 1px solid #CCC;
  }
  
  & > th, td {
    padding: 8px 12px;
    text-align: left;
    line-height: 24px;
  }
`;

const BlogPost = ({ content }) => {
  const blogPost = content.shift();

  return (
    <Container>
      {blogPost && <Article
        postedDate={moment(blogPost.created_at)}
        title={blogPost.title}
      />}
    </Container>
  );
};

const Article = ({ postedDate, title }) => (
  <main>
    <Title>{title}</Title>
    <PostedDate>Blog • {postedDate.format('MMMM Do, YYYY')}</PostedDate>
    <Markdown>
      <ReactMarkdown
        renderers={{ code: CodeBlock }}
        source={marked}
      />
    </Markdown>
  </main>
);

BlogPost.propTypes = {
  content: PropTypes.array.isRequired
};

Article.propTypes = {
  postedDate: PropTypes.objectOf(moment).isRequired,
  title: PropTypes.string.isRequired
};

export default BlogPost;
