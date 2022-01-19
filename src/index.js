import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderWeatherApp = (elem) => {
  console.info('rendering...');
  console.info('React Weather App');
  ReactDOM.render(<App />, elem);
}
