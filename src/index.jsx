import React from 'react';
import ReactDOM from 'react-dom';
import WebAppProvider from './WebAppProvider';
import App from './App';

ReactDOM.render(
  <WebAppProvider>
    <App />
  </WebAppProvider>,
  document.getElementById('root')
);
