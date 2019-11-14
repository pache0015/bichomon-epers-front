import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import Login from "./component/js/Login"

ReactDOM.render(
    <Login/>, document.getElementById('root'));

serviceWorker.unregister();
