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
    {Object.keys(content).map((url) => <Nugget content={content[url]} key={content[url]._id} />)}
  </Container>
);

ContentListing.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired
};

export default ContentListing;
