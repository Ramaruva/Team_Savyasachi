import { Route, Switch } from "react-router-dom";
import React from "react";
import { Navbar } from "../Components/Home/Navbar";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/SignIn/SignIn";
import { SignUp } from "../Components/SignIn/SignUp";


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
				
				<Route>
					<h2>Page Not found</h2>
				</Route>
			</Switch>
		</>
	);
};
