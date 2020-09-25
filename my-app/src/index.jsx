import  React  from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

// import Count from './components/count'
import App from './containers/app'
import store from './redux/store'


render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))


