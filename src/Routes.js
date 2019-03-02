import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Details from './components/Details';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component = { Characters } />
            <Route path = '/details' component = { Details } />
        </Switch>
    )
}
export default Routes;