import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
