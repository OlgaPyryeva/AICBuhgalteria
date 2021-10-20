import React from "react";
import logo from "../../../img/logo.svg";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  const { setPopup, popup } = props;
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Как это работает</Link>
          </li>
          <li>
            <Link to="/why">Почему AIC </Link>
          </li>
          <li>
            <Link to="/benefits">Наши преимущества</Link>
          </li>
          <li>
            <Link to="/aboutUs">О нас пишут</Link>
          </li>
          <li>
            <Link to="/tariffs">Тарифы</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>

          <li>
            <button onClick={() => setPopup(!popup)}>Подключиться </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
