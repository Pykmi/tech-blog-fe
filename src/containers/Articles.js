import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as articleActions from 'actions/article_actions';

import ArticleCompact from 'presentational/ArticleCompact';

const Container = styled.div`
  display: flex;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };
    this.stateHasArticles = this.stateHasArticles.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if(Articles.propsHasArticles(nextProps)) {
      nextProps.articleActions.fetchAll();
    }

    return { articles: nextProps.articles };
  }

  static propsHasArticles = (props) => props.articles.length < 1;

  stateHasArticles = () => this.state.articles.length > 0;

  render() {
    if(this.stateHasArticles()) {
      return (
        <Container>
          {this.state.articles.map((article) => (
            <ArticleCompact data={article} key={article._id} />
          ))}
        </Container>
      );
    }
    return(
      <div></div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
  articleActions: PropTypes.objectOf(PropTypes.func).isRequired
};

Articles.defaultProps = {
  articles: []
};

const mapDispatchToProps = dispatch => ({
  articleActions: bindActionCreators(articleActions, dispatch)
});

const mapStateToProps = state => ({
  articles: state.articles
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
