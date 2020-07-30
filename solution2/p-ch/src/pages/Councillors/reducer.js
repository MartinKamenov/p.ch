import defaultState from './defaultState';
import * as actionTypes from './actionTypes';
import {List} from 'immutable';

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COUNCLILLORS: {
      return state.set('loading', true);
    }
    case actionTypes.FETCH_COUNCLILLORS_SUCCESS: {
      const councillors = action.result;
      return state
          .set('councillors', new List(councillors))
          .set('loading', false)
          .set('initialyFetched', true);
    }
    case actionTypes.FETCH_COUNCLILLORS_FAILURE: {
      return state.set('loading', false)
          .set('initialyFetched', true);
    }
    default: {
      return state;
    }
  }
};
