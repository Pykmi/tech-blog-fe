import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/content_actions';

export default (Composed) => {
  class withContent extends React.Component {
    constructor(props) {
      super(props);

      this.state = { frontPage: {} };
    }
    
    static getDerivedStateFromProps(nextProps) {
      if(withContent.propsNeedContent(nextProps)) {
        nextProps.actions.fetch();
        console.log('fetch()');
      }

      return { frontPage: nextProps.frontPage };
    }

    static propsNeedContent = (props) => Object.keys(props.frontPage).length < 1;

    render() {
      return <div>{!_.isEmpty(this.props.frontPage) && <Composed content={this.props.frontPage} />}</div>;
    }
  }

  withContent.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    frontPage: PropTypes.objectOf(PropTypes.any),
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  withContent.defaultProps = {
    frontPage: {}
  };

  const mapStateToProps = state => ({
    frontPage: state.frontPage
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(withContent));
};
