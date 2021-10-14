import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import gmail from "../img/gmail.svg";
import facebook from "../img/facebook.svg";
import vk from "../img/vk.svg";
import yandex from "../img/yandex.svg";
import robot1 from "../img/robot1.svg";
import eye from "../img/eye.svg";
import x from "../img/x.svg";

export default function SignIn() {
  return (
    <div className="loginWrapper container">
      <div className="loginContainer">
        <div className="loginContainerLeft">
          <div className="loginCloseBtn">
            <button>
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
              <input type="email" placeholder="Email" />
            </div>
            <div className="loginPassword">
              <label>Пароль</label>
              <input type="password" placeholder="Password" />
              <img src={eye} alt="eye" />
            </div>
          </div>
          <div className="newPassword">Забыли пароль? </div>
          <div>
            <button className="loginEnterBtn">Войти</button>
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
