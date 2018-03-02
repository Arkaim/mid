import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from './Products'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App />  <Products /> </div>, document.getElementById('root'));
registerServiceWorker();
