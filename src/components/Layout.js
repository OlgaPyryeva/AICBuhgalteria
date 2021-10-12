import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import NavBar from "./pages/home/navbar/NavBar";
import Signup from "./SignUp/SignUp";
import Signin from "./SignIn/SignIn";

export default function Layout() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/SignUp" render={() => <Signup />} />
        <Route path="/SignIn" render={() => <Signin />} />
      </Switch>
    </BrowserRouter>
  );
}
