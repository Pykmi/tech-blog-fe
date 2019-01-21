import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/content_actions';

export default (ComposedComponent) => {
  class RequireContent extends React.Component {
    constructor(props) {
      super(props);

      this.state = { articles: [] };
    }
    
    static getDerivedStateFromProps(nextProps) {
      if(RequireContent.propsHasArticles(nextProps)) {
        nextProps.actions.fetchAll();
      }

      return { articles: nextProps.articles };
    }

    static propsHasArticles = (props) => props.articles.length < 1;

    render() {
      return <div>{!_.isEmpty(this.props.articles) && <ComposedComponent {...this.props} />}</div>;
    }
  }

  RequireContent.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    articles: PropTypes.arrayOf(PropTypes.any),
    history: PropTypes.objectOf(PropTypes.any).isRequired
  };

  RequireContent.defaultProps = {
    articles: []
  };

  const mapStateToProps = state => ({
    articles: state.articles
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(RequireContent));
};
