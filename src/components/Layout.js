import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from "./landingPage/mainPage/MainPage";
// import NavBar from "./landingPage/home/navbar/NavBar";
import SignUp from "./SignUp/SignUp";
// import SignIn from "./SignIn/SignIn";

export default function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/SignUp" render={() => <SignUp />} />
        {/* <Route path="/SignIn" render={() => <Signin />} /> */}
      </Switch>
    </BrowserRouter>
  );
}
