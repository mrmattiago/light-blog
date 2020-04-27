import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Routing} from './routing.config';

ReactDOM.render(
  <Routing />,
  document.getElementById('rootContainer')
);

serviceWorker.unregister();
