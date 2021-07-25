import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import todoReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {watchAll} from './store/sagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(todoReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchAll)



ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
