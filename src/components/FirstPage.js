import React, { useState } from "react";
import Mainpage from "./landingPage/MainPage";
import DesktopPage from "./DesktopPage/DesktopPage";

export default function FirstPage() {
  // временно пока нет авторизации
  const [isAuth, setIsAuth] = useState();
  // временно пока нет авторизации

  return <div>{isAuth ? <DesktopPage /> : <Mainpage />}</div>;
}
