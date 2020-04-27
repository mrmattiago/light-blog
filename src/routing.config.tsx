import React, {Suspense} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import PageWrapper from './views/PageWrapper';
import routes from './routing.paths';

const Routing = () => (
  <Router>
    <React.StrictMode>
      <PageWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact={route.exact}
                path={route.path}
                render={(props) => {
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
