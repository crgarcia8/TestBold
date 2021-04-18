import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header, Container } from './Components/';
import store from './Redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
