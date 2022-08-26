import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

import { AppRouter } from './router/AppRouter';
import { store } from './redux/store/store';
import { Loader } from './shared';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
    <Provider store={ store }>
    <AppRouter />
    </Provider>
    </Suspense>,
  </React.StrictMode>
);