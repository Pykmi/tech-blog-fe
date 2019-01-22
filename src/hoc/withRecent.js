import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/content_actions';

export default (Composed) => {
  class withRecent extends React.Component {
    constructor(props) {
      super(props);

      this.state = { articles: [] };
    }
    
    static getDerivedStateFromProps(nextProps) {
      const name = nextProps.match.params.name;
      
      // check if no recent article is in store
      if(withRecent.propsNeedContent(nextProps)) {
        nextProps.actions.fetchOne(name);
        console.log('fetchOne()');
      }

      // check if recent article is not the requested article
      if(nextProps.recent.url !== name) {
        nextProps.actions.fetchOne(name);
        console.log('fetchOne()');
      }

      return { recent: nextProps.recent };
    }

    static propsNeedContent = (props) => Object.keys(props.recent).length < 1;

    render() {
      return <div>{!_.isEmpty(this.props.recent) && <Composed content={this.props.recent} />}</div>;
    }
  }

  withRecent.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    recent: PropTypes.objectOf(PropTypes.any),
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  withRecent.defaultProps = {
    recent: {}
  };

  const mapStateToProps = state => ({
    recent: state.recent
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(withRecent));
};
