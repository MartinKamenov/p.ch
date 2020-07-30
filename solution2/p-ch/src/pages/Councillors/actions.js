import * as actionTypes from './actionTypes';

export const fetchCouncillors = () => ({
  type: actionTypes.FETCH_COUNCLILLORS,
  request: {
    url: '/councillors?format=json',
    method: 'GET',
    onSuccess: actionTypes.FETCH_COUNCLILLORS_SUCCESS,
    onFailure: actionTypes.FETCH_COUNCLILLORS_FAILURE,
  },
});
