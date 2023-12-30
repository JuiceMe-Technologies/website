
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";
import EmployeePage from "../components/employee";
import EmployeerPage from "../components/employer";
import HomePage from "../components/home";

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/employeer">
            <EmployeerPage />
          </Route>
          <Route path="/employee">
            <EmployeePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/get-started">
            <ContactPage />
          </Route>
        </Switch>
    </Router>
  );
}