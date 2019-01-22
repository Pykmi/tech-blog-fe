import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/content_actions';

export default (Composed) => {
  class withCategory extends React.Component {
    constructor(props) {
      super(props);

      this.state = { category: '', content: {} };
    }
    
    static getDerivedStateFromProps(nextProps) {
      const name = nextProps.match.params.name;

      if(withCategory.propsNeedContent(nextProps)) {
        nextProps.actions.fetchByCategory();
        console.log('fetchByCategory()');
      }

      if(nextProps.category.name !== name) {
        nextProps.actions.fetchByCategory();
        console.log('fetchByCategory()');
      }

      return {
        category: nextProps.category.name,
        content: nextProps.category.content
      };
    }

    static propsNeedContent = (props) => Object.keys(props.category).length < 1;

    render() {
      return <div>{!_.isEmpty(this.props.category) && <Composed category={this.props.category.name} content={this.props.category.content} />}</div>;
    }
  }

  withCategory.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    category: PropTypes.objectOf(PropTypes.any),
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  withCategory.defaultProps = {
    category: {}
  };

  const mapStateToProps = state => ({
    category: state.category
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(withCategory));
};
