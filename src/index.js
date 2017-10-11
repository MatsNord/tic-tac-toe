import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tictactoe.css';
import Game from './tictactoe';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
