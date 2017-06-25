import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import QuestionPage from '../../../../../src/components/question/QuestionPage';

function setup() {
  return shallow(<QuestionPage/>);
}

describe('QuestionPage', () => {
  it('renders a h4 - Question Page', () => {
      //const wrapper = setup();
      //expect(wrapper.find('h4').text()).to.equal('Question Page');
  });
});
