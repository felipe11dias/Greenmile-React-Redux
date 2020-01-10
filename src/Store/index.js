import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Models/rootReducer';
import rootSaga from './Models/rootSaga';
import createSagaMilddleware from 'redux-saga';

const sagaMiddleware = createSagaMilddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;