import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Rules from '../pages/Rules';
import About from '../pages/About';
import Register from '../pages/Register';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
    </Switch>
)

export default Routes;