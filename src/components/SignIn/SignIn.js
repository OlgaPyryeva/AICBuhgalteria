import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignIn.css";
import gmail from "../img/gmail.svg";
import facebook from "../img/facebook.svg";
import vk from "../img/vk.svg";
import yandex from "../img/yandex.svg";
import robot1 from "../img/robot1.svg";
import eye from "../img/eye.svg";
import x from "../img/x.svg";

export default function SignIn(props) {
  const { setPopup, popup } = props;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError && passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /[@]{1,}[a-z,0-9, -.]{1,63}[.]{1}[a-zA-Z]{1,15}/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };
  // console.log("email", email);

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const pas =
      /(?=.*[0-9])(?=.*[a-zA-Z! # $ % & ' * + - / = ? ^ _ ` { | } ~]){7,}/;
    if (!pas.test(String(e.target.value).toLowerCase())) {
      setPasswordError(
        "Пароль должен содержать буквы(a-z) и цифры и быть длинной не менее 7 символов"
      );
    } else {
      setPasswordError("");
    }
  };
  // console.log("password", password);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailVisited(true);
        break;
      case "password":
        setPasswordVisited(true);
        break;
      default:
        console.log("неизвестная ошибка при вводе email или password");
    }
  };

  function postData() {
    axios
      .post("http://server", { email, password })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="loginWrapper container">
      <div className="loginContainer">
        <div className="loginContainerLeft">
          <div className="loginCloseBtn">
            <button onClick={() => setPopup(!popup)}>
              <img src={x} alt="x" />
            </button>
          </div>
          <div className="loginText">
            <div className="loginTitle">Вход</div>
            <div className="loginSubtitle">Вход через социальные сети</div>
            <div className="socialNetworksLogin">
              <img src={gmail} alt="gmail icon" />
              <img src={facebook} alt="facebook icon" />
              <img src={vk} alt="vk icon" />
              <img src={yandex} alt="yandex icon" />
            </div>
          </div>
          <div className="loginFields">
            <div className="loginEmail">
              <input
                onChange={(e) => emailHandler(e)}
                onBlur={(e) => blurHandler(e)}
                name="email"
                value={email}
                type="text"
                className="email"
              />
              {emailVisited && emailError && (
                <div className="errorMessage">{emailError}</div>
              )}
            </div>
            <div className="loginPassword">
              <label>Пароль</label>
              <input
                onChange={(e) => passwordHandler(e)}
                onBlur={(e) => blurHandler(e)}
                name="password"
                value={password}
                type="password"
                className="password"
              />
              <img src={eye} alt="eye" />
              {passwordVisited && passwordError && (
                <div className="errorMessage">{passwordError}</div>
              )}
            </div>
          </div>
          <div className="newPassword">Забыли пароль? </div>
          <div>
            <button onClick={postData} className="loginEnterBtn">
              Войти
            </button>
          </div>
          <div className="loginRegBtn">
            Еще нет аккаунта? <Link to="/SignUp"> Зарегистрироваться </Link>
          </div>
        </div>
        <div className="loginContainerRight">
          <img src={robot1} alt="robot1" />
        </div>
      </div>
    </div>
  );
}
