import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import swDev from './swDev';
import './assets/css/global.css'
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/Sw.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.log('response', response);
  })
}

swDev();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
