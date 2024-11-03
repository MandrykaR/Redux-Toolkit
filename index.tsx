import ReactDOM from 'react-dom/client';
import App from './src/App';
import { Provider } from 'react-redux';
import { store } from './src/state/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
