import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Rules from '../pages/Rules';
import About from '../pages/About';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/about" component={About} />
    </Switch>
)

export default Routes;