import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Loading from './Loading';

const AsyncHome = importedComponent(() => import('./NuestraHistoria'), { LoadingComponent: Loading });
const AsyncUs = importedComponent(() => import('./ComisionDirectiva'), { LoadingComponent: Loading });
const AsyncContact = importedComponent(() => import('./QuieroColaborar'), { LoadingComponent: Loading });
const AsyncGallery = importedComponent(() => import('./Galeria'), { LoadingComponent: Loading });
const AsyncNoMatch = importedComponent(() => import('./NoMatch'), { LoadingComponent: Loading });

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/ComisionDirectiva" component={AsyncUs} />
        <Route exact path="/QuieroColaborar" component={AsyncContact} />
        <Route exact path="/Galeria" component={AsyncGallery} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
