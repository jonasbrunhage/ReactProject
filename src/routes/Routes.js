import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { PageNotFound } from '../view/PageNotFound'
import { SignInView } from '../view/SignInView'
import { PokemonView } from '../view/PokemonView'

export const Routes = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path='/home' component={HomeView} />
                <Route exact path='/signin' component={SignInView} />
                <Route exact path='/pokemon' component={PokemonView} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}
