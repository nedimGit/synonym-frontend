import { browserHistory } from 'react-router';
import isEmpty from 'lodash/isEmpty';

import { generateQueryParams } from '../api/helpers/helper';

class Helpers {
  static goTo = (path, params, data = null) => {
    if (!isEmpty(params)) {
      browserHistory.push({ pathname: path, search: generateQueryParams(params), state: data });
    } else {
      browserHistory.push(path);
    }
  };

  static setFavicon = (imgPath = '') => {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = imgPath;
    document.head.appendChild(link);
  };
}

export default Helpers;
