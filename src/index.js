import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.scss';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';


const element = document.createElement('meta')
element.name = "google-signin-client_id"
element.content = process.env.REACT_APP_GOOGLE_CONTENT
document.head.appendChild(element)

render(<App />, document.getElementById('root'));
registerServiceWorker();
