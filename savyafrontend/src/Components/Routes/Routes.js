import React from 'react'
import { Route, Switch } from 'react-router'
import Header from '../Quiz/Header'

function Routes(){
    return (
        <div>
            <Switch>
                <Route path="/quiz">
                    <Header />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
