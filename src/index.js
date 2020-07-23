import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // import normal css to apply to body background color
import App from './App'; // import App 

// Render the react app imported and render the dom,
// inside the element with id root in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
