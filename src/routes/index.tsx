import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../pages/Home';
import Country from '../pages/Country';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:_id" component={Country} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
