import {createStore, combineReducers, applyMiddleware} from 'redux';
import {councillorsReducer as councillors} from '../pages/Councillors';
import requestMiddleware from './requestMiddleware';
import {toastsReducer as toasts} from 'react-toastify-redux';

const reducer = combineReducers({
  councillors,
  toasts,
});

export default createStore(reducer, applyMiddleware(requestMiddleware));
