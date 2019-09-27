import React from 'react';
import ReactDOM from 'react-dom';
import slacc-client from './slacc-client';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<slacc-client />, div);
  ReactDOM.unmountComponentAtNode(div);
});
