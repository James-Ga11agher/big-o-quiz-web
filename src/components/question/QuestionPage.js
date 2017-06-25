import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActions from '../../actions/pageActions.js';

class QuestionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClickChangePage = this.onClickChangePage.bind(this);
  }

  onClickChangePage() {
    this.props.dispatch(pageActions.changePage('RESULTS_PAGE'));
  }

  render() {
    return (
      <div>
        <h4>Question Page</h4>
        <input
          type="submit"
          value="Change Page"
          onClick={this.onClickChangePage}
        />
      </div>
    );
  }
}

QuestionPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(QuestionPage);
