import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />     // it is not a tag but but we can create a cutom tag
  // <React.StrictMode>  // we can run even without strictmode
  //   <App />    
  // </React.StrictMode>
);

reportWebVitals();
