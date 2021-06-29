import axios from 'axios';

import get from 'lodash/get';
import { isEmpty } from 'lodash';

import { initializeInterceptor } from './interceptor';

const CancelToken = axios.CancelToken;

initializeInterceptor(axios);

export class Api {
  static headers = async headersIncome => {
    let headers = {};
    if (!isEmpty(headersIncome)) {
      headers = { ...headers, ...headersIncome };
    }
    return headers;
  };

  static get = (route, options, headers) => Api.xhr({ route, method: 'GET', options, headersIncome: headers });

  static put = (route, data, options, headers) => {
    options = {
      ...options,
      cancelToken: new CancelToken(function executor(cancel) {}),
    };

    return Api.xhr({ route, method: 'PUT', data, options, headersIncome: headers });
  };

  static post = (route, data, options, headers) => Api.xhr({ route, method: 'POST', data, options, headersIncome: headers });

  static delete = (route, options, headers) => Api.xhr({ route, method: 'DELETE', options, headersIncome: headers });

  static xhr({ route, method, data, options = {}, headersIncome = {} }) {
    options = {
      needLoader: false,
      onUploadProgress: (p, cancelObj) => {},
      ...options,
    };

    return Api.headers(headersIncome)
      .then(headers => {
        return axios({
          method,
          url: route,

          ...options,
          headers: { ...headers, ...headersIncome },
          data: data,
        });
      })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.error(err);

        const errCode = get(err, 'response.data.Code');
        const generalCode = get(err, 'response.status');

        //logout if there is no codes
        if (generalCode === 401 && isNaN(errCode)) {
          return Promise.reject(err);
        }

        if (generalCode === 400 && !isNaN(errCode)) {
        }

        return Promise.reject(err);
      });
  }
}
