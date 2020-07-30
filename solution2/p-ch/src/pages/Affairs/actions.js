import * as actionTypes from './actionTypes';

export const fetchAffairs = () => ({
  type: actionTypes.FETCH_AFFAIRS,
  request: {
    url: '/affairs?format=json',
    method: 'GET',
    onSuccess: actionTypes.FETCH_AFFAIRS_SUCCESS,
    onFailure: actionTypes.FETCH_AFFAIRS_FAILURE,
  },
});
