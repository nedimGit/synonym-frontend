import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './core/routes';

import { configureStore } from './core/store';

export const { persistor, store, config } = configureStore();

export const rehydrate = () => {
  window.addEventListener('storage', false);
};

const router = (
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </PersistGate>
);

render(router, document.getElementById('root'));
