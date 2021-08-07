import { Route, Switch } from "react-router-dom";
import React from "react";
import { Navbar } from "../Components/Home/Navbar";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/SignIn/SignIn";
import { SignUp } from "../Components/SignIn/SignUp";
import Pages from '../Components/Quiz/Pages/Pages'
import QuizQuestions from '../Components/Quiz/QuizQuestions/Quiz'
import Result from '../Components/Quiz/Result/Result'
// import Header from '../Components/Quiz/Header'


export const Routes = () => {
	return (
		<>
			<Navbar/>
			<Switch>
				<Route exact path="/">
					<Home />
                </Route>
                <Route exact path="/signin">
                    <Login/>
                </Route>
                <Route path="/signup">
              <SignUp/>
                </Route>
				<Route path="/quiz" exact>
                    {/* <Header /> */}
                </Route>
                <Route path="/quiz/pages">
                    {/* <Header /> */}
                    <Pages />
                </Route>
                <Route path="/quiz/questions">
                    <QuizQuestions />
                </Route>
                <Route path="/quiz/result">
                    <Result />
                </Route>
				<Route>
					<h2>Page Not found</h2>
				</Route>
			</Switch>
		</>
	);
};
