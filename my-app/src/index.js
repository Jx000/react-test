import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/app'
import './index.css'

// ReactDOM.render(<App />, document.getElementById('root'))
render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))
