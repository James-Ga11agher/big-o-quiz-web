import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionPage from './question/QuestionPage';
import ResultsPage from './results/ResultsPage';

class App extends React.Component {

  getPageToShow() {
    return this.props.currentPage === 'QUESTION_PAGE' ?
        {component: <QuestionPage/>} : {component: <ResultsPage/>};
  }

  render() {
    return (
      <div>
        <h3>Overall App</h3>
        {this.getPageToShow().component}
      </div>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    currentPage: state.currentPage
  };
}

export default connect(mapStateToProps)(App);
