import React from 'react'
import { Route, Switch } from 'react-router'
import Header from '../Quiz/Header'
import Pages from '../Quiz/Pages/Pages'
import QuizQuestions from '../Quiz/QuizQuestions/Quiz'
import Result from '../Quiz/Result/Result'

function Routes(){
    return (
        <div>
            <Switch>
                <Route path="/quiz" exact>
                    <Header />
                </Route>
                <Route path="/quiz/pages">
                    <Header />
                    <Pages />
                </Route>
                <Route path="/quiz/questions">
                    <QuizQuestions />
                </Route>
                <Route path="/quiz/result">
                    <Result />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
