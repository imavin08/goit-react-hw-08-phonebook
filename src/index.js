import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { persistor } from 'redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
