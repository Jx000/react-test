import  React  from 'react';
import { render } from 'react-dom';


import App from './components/app'
import store from './redux/store'



function render1() {
    render(<App store = {store}/>, document.getElementById('root'))
}

render1()
store.subscribe(render1)