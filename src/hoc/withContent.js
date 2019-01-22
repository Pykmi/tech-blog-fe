import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/content_actions';

const BASE_ROUTE = '/';
const SINGLE_CONTENT_ROUTE = '/article/:name';

export default (Composed) => {
  class withContent extends React.Component {
    constructor(props) {
      super(props);

      this.state = { articles: [] };
    }
    
    static getDerivedStateFromProps(nextProps) {
      if(withContent.propsNeedAll(nextProps)) {
        nextProps.actions.fetchAll();
      }
      
      if(withContent.propsNeedOne(nextProps)) {
        console.log('single content');
      }

      console.log(nextProps.content);
      return { content: nextProps.content };
    }

    static propsNeedAll = (props) => Object.keys(props.content).length < 1 && props.match.path === BASE_ROUTE;

    static propsNeedOne = (props) => Object.keys(props.content).length < 1 && props.match.path === SINGLE_CONTENT_ROUTE;

    render() {
      return <div>{!_.isEmpty(this.props.content) && <Composed content={this.props.content} />}</div>;
    }
  }

  withContent.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    content: PropTypes.objectOf(PropTypes.any),
    history: PropTypes.objectOf(PropTypes.any).isRequired
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
