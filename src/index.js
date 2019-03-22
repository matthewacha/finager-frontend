import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.scss';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
