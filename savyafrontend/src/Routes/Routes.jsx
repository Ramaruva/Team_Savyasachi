import { Route, Switch } from "react-router-dom";
import React from "react";
import { Navbar } from "../Components/Home/Navbar";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/SignIn/SignIn";
import { SignUp } from "../Components/SignIn/SignUp";
import Pages from '../Components/Quiz/Pages/Pages'
import QuizQuestions from '../Components/Quiz/QuizQuestions/Quiz'
import Result from '../Components/Quiz/Result/Result'
import VideoApp from "../Components/VideoChat/VideoApp"
// import Header from '../Components/Quiz/Header'

import { Teach } from "../Components/Teach/Teach";
import { Learn } from "../Components/Learn/Learn";
import { Video } from "../Components/Video/Video";
import VideoChatApp from "../Components/VideoChat/VideoChatApp";
import CallPage from "../Components/Meet/CallPage/CallPage"
import HomePage from "../Components/Meet/HomePage/HomePage"

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
                <Route path="/learn">
                <Video/>
                </Route>
                <Route path="/teach">
                <Teach/>
                </Route>
              
                <Route path="/quiz/pages">                   
                    <Pages />
                </Route>
                <Route path="/quiz/questions">
                    <QuizQuestions />
                </Route>
                <Route path="/quiz/result">
                    <Result />
                </Route>
                <Route path="/videochat">
                    <VideoChatApp/>
                </Route>
                <Route path="/videoapp">
                    <VideoApp />
                </Route>
                <Route exact path="/meet">
                    <HomePage/>
                </Route>
                
                <Route exact path="/meet/:id">
                    <CallPage/>
                </Route>
				<Route>
					<h2>Page Not found</h2>
				</Route>
			</Switch>
		</>
	);
};
