import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';

import './index.css';
import { Slacc } from './App';
import mySaga from './reducers/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <Slacc />
    </Provider>,
    document.getElementById('root')
);