import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Characters from './components/Characters';
import Details from './components/Details';
import CharactersList from './components/CharacterList';
import Title from './components/Title';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component = { CharactersList } />
            <Route path = '/details' component = { Details } />
            <Route path = '/title' component = { Title } />
        </Switch>
    )
}
export default Routes;