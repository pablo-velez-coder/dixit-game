import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from 'state/redux';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter as Router }
        from "react-router-dom";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Router>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </Router>
);
