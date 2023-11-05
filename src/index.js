import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer autoClose={1500} />
  </Provider>
);

// <React.StrictMode basename="/vugar-gasimov">
//   <App />
//   <ToastContainer autoClose={1500} />
// </React.StrictMode>
