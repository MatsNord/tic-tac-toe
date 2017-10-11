import React from 'react';
import ReactDOM from 'react-dom';
import Game from './tictactoe';

it('renders without crashing 2', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
});
