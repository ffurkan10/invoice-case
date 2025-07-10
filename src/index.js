import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store/Store';
import './index.css';
import "./i18n/index.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

