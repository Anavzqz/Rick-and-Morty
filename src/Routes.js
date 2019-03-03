import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Details from './components/Details';
import CharacterList from './components/CharacterList';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component = { Characters } />
            <Route path = '/details' component = { Details } />
            <Route path = '/list' component = { CharacterList } />
        </Switch>
    )
}
export default Routes;