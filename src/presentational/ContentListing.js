import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nugget from 'presentational/Nugget';

const Container = styled.div`
  display: flex;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ContentListing = ({ content }) => (
  <Container>
    {content.map((post) => <Nugget content={post} key={post._id} />)}
  </Container>
);

ContentListing.propTypes = {
  content: PropTypes.array.isRequired
};

export default ContentListing;
