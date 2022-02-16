import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Providers from './providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
