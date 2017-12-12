import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();