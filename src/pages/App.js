import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Loading from './Loading';

const AsyncHome = importedComponent(() => import('./Home'), { LoadingComponent: Loading });
const AsyncAbout = importedComponent(() => import('./NuestraHistoria'), { LoadingComponent: Loading });
const AsyncUs = importedComponent(() => import('./ComisionDirectiva'), { LoadingComponent: Loading });
const AsyncNoMatch = importedComponent(() => import('./NoMatch'), { LoadingComponent: Loading });

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/NuestraHistoria" component={AsyncAbout} />
        <Route exact path="/ComisionDirectiva" component={AsyncUs} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
