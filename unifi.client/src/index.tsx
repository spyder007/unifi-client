import './style.scss';
import '../node_modules/@popperjs/core/dist/esm/popper';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from "./store/store";
import App from './App';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement);

registerServiceWorker();

