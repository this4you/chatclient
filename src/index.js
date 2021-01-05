import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';

import App from './App';
import { userActions } from "./redux/actions";
import store from './redux/store';

import 'emoji-mart/css/emoji-mart.css';
import './styles/index.scss';

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);
