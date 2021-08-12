import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainPage from './CCPMainPage/index';
import FormPage from './FormPage/index';
import LoginPage from './Login/index';
import StudentMainPage from './StudentMainPage/index';


const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component = {MainPage} />
            <Route path="/form" component = {FormPage} />
            <Route path="/login" component = {LoginPage} />
            <Route path="/student" component = {StudentMainPage} />
        </Router>
    );
};

export default Webpages;