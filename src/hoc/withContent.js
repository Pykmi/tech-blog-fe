import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoContent from 'presentational/NoContent';

export default (Composed, fetch) => {
  class withContent extends React.Component {
    constructor(props) {
      super(props);

      this.fetch = fetch;
    }

    componentDidMount() {
      const { location, match } = this.props;
      const fetch = this.fetch;

      this.props.dispatch(fetch(location.pathname, match.params));
    }

    render() {
      const { content } = this.props;
      return content.hasError ? <NoContent /> : <Composed content={content} />;
    }
  }

  withContent.propTypes = {
    content: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  withContent.defaultProps = {
    content: []
  };

  const mapStateToProps = state => ({
    content: state.content
  });

  return connect(mapStateToProps)(withRouter(withContent));
};
