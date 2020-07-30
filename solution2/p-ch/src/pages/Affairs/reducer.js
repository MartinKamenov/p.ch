import defaultState from './defaultState';
import * as actionTypes from './actionTypes';
import {List} from 'immutable';

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AFFAIRS: {
      return state.set('loading', true);
    }
    case actionTypes.FETCH_AFFAIRS_SUCCESS: {
      const affairs = action.result;
      return state
          .set('affairs', new List(affairs))
          .set('loading', false)
          .set('initialyFetched', true);
    }
    case actionTypes.FETCH_AFFAIRS_FAILURE: {
      return state.set('loading', false)
          .set('initialyFetched', true);
    }
    default: {
      return state;
    }
  }
};
