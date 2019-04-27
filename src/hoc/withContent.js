import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/content_actions';

export default (Composed) => {
  class withContent extends React.Component {
    componentDidMount() {
      const path = this.props.location.pathname;
      this.props.actions.fetch(path);
    }

    render() {
      return <div>{!_.isEmpty(this.props.content) && <Composed content={this.props.content} />}</div>;
    }
  }

  withContent.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    content: PropTypes.objectOf(PropTypes.any),
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  withContent.defaultProps = {
    content: {}
  };

  const mapStateToProps = state => ({
    content: state.content
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(withContent));
};
