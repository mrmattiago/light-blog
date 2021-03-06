import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageWrapper from './views/PageWrapper';
import routes from './routing.paths';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
  history.replace(path);
}

const Routing = () => (
  <Router>
    <React.StrictMode>
      <PageWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                exact={route.exact}
                path={route.path}
                render={(props: any) => {
                  return <route.component {...props} />
                }}
              />
            ))}
          </Switch>
        </Suspense>
      </PageWrapper>
    </React.StrictMode>
  </Router>
);

// const allowRedirect = (props: Props) => props.match.url === props.location.pathname;

export {Routing};
