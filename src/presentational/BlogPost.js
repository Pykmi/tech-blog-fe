import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: center;
`;

const BlogPost = ({ content }) => {
  console.log(content);

  return (
    <Container>

    </Container>
  );
}

BlogPost.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired
};
 
export default BlogPost;