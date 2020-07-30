import {createStore, combineReducers, applyMiddleware} from 'redux';
import {councillorsReducer as councillors} from '../pages/Councillors';
import {affairsReducer as affairs} from '../pages/Affairs';
import {councilsReducer as councils} from '../pages/Councils';
import requestMiddleware from './requestMiddleware';
import {toastsReducer as toasts} from 'react-toastify-redux';

const reducer = combineReducers({
  councillors,
  councils,
  affairs,
  toasts,
});

export default createStore(reducer, applyMiddleware(requestMiddleware));
