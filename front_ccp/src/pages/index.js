import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./CCPMainPage/index";
import FormPage from "./FormPage/index";
import LoginPage from "./Login/index";
import StudentMainPage from "./StudentMainPage/index";
import RegisterPage from "./RegisterPage/index";
import ProfessorMainPage from "./ProfessorMainPage";

const Webpages = () => {
	return (
		<Router>
			<Route exact path="/" component={LoginPage} />
			<Route path="/ccp" component={MainPage} />
			<Route path="/form" component={FormPage} />
			<Route path="/student" component={StudentMainPage} />
			<Route path="/professor" component={ProfessorMainPage} />
			<Route path="/register" component={RegisterPage} />
		</Router>
	);
};

export default Webpages;
