import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';
import { theme } from 'styles/theme.js';
import GlobalStyles from 'styles';

import App from 'App';
import NotificationContainer from 'containers/Notifications';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <NotificationContainer />
        <App />
      </div>
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'));