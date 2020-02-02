import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './store/state';
import reducer from './store/reducer';

/**
 * initial state
 */
const initialState = {
  error: '',
  loading: false,
  reviews: [],
  selectedReview: null,
}

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ToastContainer />
    <App />
  </StateProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
