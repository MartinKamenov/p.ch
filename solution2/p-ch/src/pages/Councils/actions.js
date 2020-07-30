import * as actionTypes from './actionTypes';

export const fetchCouncils = () => ({
  type: actionTypes.FETCH_COUNCLILS,
  request: {
    url: '/councils?format=json',
    method: 'GET',
    onSuccess: actionTypes.FETCH_COUNCLILS_SUCCESS,
    onFailure: actionTypes.FETCH_COUNCLILS_FAILURE,
  },
});
