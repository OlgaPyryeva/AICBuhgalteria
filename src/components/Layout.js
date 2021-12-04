import React, { useState, useEffect } from "react";
import Login from "./login/Login";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Registration from "./registration/Registration";
import MainPage from "./landingPage/mainPage/MainPage";
import NavBar from "./landingPage/home/navbar/NavBar";
// import SignIn from "./SignIn/SignIn";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "./actions/user";

export default function Layout() {
  const [popup, setPopup] = useState(false);
  const [popupReg, setPopupReg] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  function toggle() {
    setPopupReg(!popupReg);
    setPopup(!popup);
  }
  return (
    <BrowserRouter>
      <NavBar setPopup={setPopup} popup={popup} />
      {popup && !isAuth && (
        <Login
          setPopup={setPopup}
          popup={popup}
          setPopupReg={setPopupReg}
          popupReg={popupReg}
          toggle={toggle}
        />
      )}

      {popupReg && !isAuth && (
        <Registration
          setPopupReg={setPopupReg}
          popupReg={popupReg}
          toggle={toggle}
        />
      )}
      <Switch>
        <Route exact path="/" render={() => <MainPage popup={popup} />} />
        {/* <Route path="/Login" render={() => <Login />} /> */}
        {/* <Route path="/SignIn" render={() => <Signin />} /> */}
      </Switch>
    </BrowserRouter>
  );
}
