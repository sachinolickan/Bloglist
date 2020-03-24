import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/saga"

import App from './components/app'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk,sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
     <App/>
    </Provider>,
    document.querySelector('#root')
);