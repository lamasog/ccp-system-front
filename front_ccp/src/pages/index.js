import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./CCPMainPage/index";
import FormPage from "./FormPage/index";
import LoginPage from "./Login/index";
import StudentMainPage from "./StudentMainPage/index";
import RegisterPage from "./RegisterPage/index";
import ProfessorMainPage from "./ProfessorMainPage";
import FormList from "./ProfessorFormList/index";
import ProfessorFeedback from "./ProfessorFeedback/index";
import CCPFeedback from "./CCPFeedback";
import ViewProfessor from "./StudentFeedbackView/Professor";
import ViewCPP from "./StudentFeedbackView/CCP";
import RecordStudents from "./AcademicRecordPage";

const Webpages = () => {
	return (
		<Router>
			<Route exact path="/" component={LoginPage} />
			<Route exact path="/ccp" component={MainPage} />
			<Route exact path="/form" component={FormPage} />
			<Route exact path="/student" component={StudentMainPage} />
			<Route exact path="/professor" component={ProfessorMainPage} />
			<Route exact path="/formlist" component={FormList} />
			<Route exact path="/recordstudent" component={RecordStudents} />
			<Route
				exact
				path="/professorfeedback"
				component={ProfessorFeedback}
			/>
			<Route exact path="/register" component={RegisterPage} />
			<Route exact path="/ccpfeedback" component={CCPFeedback} />
			<Route
				exact
				path="/student/view/professor"
				component={ViewProfessor}
			/>
			<Route exact path="/student/view/ccp" component={ViewCPP} />
		</Router>
	);
};

export default Webpages;
