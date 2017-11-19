import React from 'react';
import ReactDOM from 'react-dom';

export const setupTestDom = (element) => {
  const div = document.createElement('div');
  ReactDOM.render(element, div);
}
