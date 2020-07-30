import axios from 'axios';
import {BASE_URL, PROXY_URL, useProxy} from '../config/dev';

import {error} from 'react-toastify-redux';

const requestMiddleware = (store) => (next) => (action) => {
  if (action.request && !action.request.customHandle) {
    next(action);

    const defaultHeaders = {
      'Access-Control-Allow-Origin': '*/*',
      'origin': 'mk',
    };

    const {
      url,
      method,
      payload,
      onSuccess,
      onFailure,
      headers = {},
    } = action.request;

    const fullHeaders = {...defaultHeaders, ...headers};


    const fullUrl =
      (useProxy ? PROXY_URL : '') +
      BASE_URL + url;

    console.log('fullUrl', fullUrl);

    const dataOrParams = method.includes(['GET', 'DELETE']) ? 'params' : 'data';

    return axios.request({
      url: fullUrl,
      method,
      headers: fullHeaders,
      [dataOrParams]: payload,
    }).then(({data}) => {
      console.log('Success', data);
      if (onSuccess) {
        store.dispatch({
          type: onSuccess,
          result: data,
        });
      }
    }).catch((er) => {
      console.log('Failure', er.message);
      store.dispatch(error(er.message));
      if (onFailure) {
        store.dispatch({
          type: onFailure,
          error: er,
        });
      }
    });
  }

  return next(action);
};

export default requestMiddleware;
