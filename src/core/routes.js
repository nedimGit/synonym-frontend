import React, { Fragment } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import values from 'lodash/values';

import App from '../App';

import { composeEnterHooksSeries } from '../common/routes-helper';
import routesConstants from '../common/routes-constants';

import Helpers from '../common/helpers';

import '../common/styles/global-style.scss';

const Routes = props => {
  const renderRoutes = routes => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <Fragment key={index}>
            <Route path={route.path} component={route.component} {...route} />
          </Fragment>
        );
      });
    } else return null;
  };

  const checkRedirect = nextState => {
    const location = nextState.location;
    if (['/'].indexOf(location.pathname) > -1) {
      Helpers.goTo(routesConstants.routes.defaultRoutes.synonym.path);
      return false;
    }

    return true;
  };

  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={routesConstants.routes.defaultRoutes.synonym.component} onEnter={composeEnterHooksSeries(checkRedirect)} />
      </Route>
      <Route path="/" component={App}>
        {renderRoutes(values(routesConstants.routes.defaultRoutes), composeEnterHooksSeries(checkRedirect))}
      </Route>
    </Router>
  );
};

export default Routes;

export const history = browserHistory;
