import React, { useState } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import NavBar from "./pages/home/navbar/NavBar";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

export default function Layout() {
  const [popup, setPopup] = useState(false);

  return (
    <BrowserRouter>
      <NavBar setPopup={setPopup} popup={popup} />
      {popup && <SignIn setPopup={setPopup} popup={popup} />}/>
      <Switch>
        <Route exact path="/" render={() => <MainPage popup={popup} />} />
        <Route path="/SignUp" render={() => <SignUp />} />
        {/* <Route path="/SignIn" render={() => <Signin />} /> */}
      </Switch>
    </BrowserRouter>
  );
}
