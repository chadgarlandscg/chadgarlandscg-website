import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from './Terminal';
import {shallow} from 'enzyme';
import { setupTestDom } from '../testUtils'

describe('The Terminal component', () => {
  it('renders without crashing', () => {
    setupTestDom(<Terminal/>);
    // const div = document.createElement('div');
    // ReactDOM.render(<Terminal />, div);
  });

  it('renders default text', () => {
    const DEFAULT_TEXT = 'Welcome to the interactive terminal!'
    const terminal = shallow(
      <Terminal/>
    );
    expect(terminal.text()).toEqual(DEFAULT_TEXT);
  });

  it('render text from props', () => {
    const testText = 'test';
    const terminal = shallow(
      <Terminal text={testText}/>
    );
    expect(terminal.text()).toEqual(testText);
  });
});
