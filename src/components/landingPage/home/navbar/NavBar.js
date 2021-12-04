import * as React from "react";
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../../img/logo.svg";
import burgerMenu from "../../../img/burgerMenu.svg";
import x from "../../../img/x.svg";
import "../../mainPage/MainPage.css";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../reducers/userReducer";

export default function ButtonAppBar(props) {
  const [scroll, setScroll] = useState(false);
  const { setPopup, popup } = props;
  // const { setPopupMenu, popupMenu } = props;
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, []);

  return (
    <div className={scroll ? "bg-color" : "bg-white"}>
      <div className="navbarContainer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div class="dropdown">
          <div class="burgerMenu">
            <img src={burgerMenu} alt="burger menu icon" />
          </div>

          <div class="dropdown-content">
            <ul>
              <li>
                <Link to="/#howWork">Как это работает</Link>
              </li>
              <li>
                <Link to="/#whyBetter">Почему AIC</Link>
              </li>
              <li>
                <Link to="/#benefits">Наши преимущества</Link>
              </li>
              <li>
                <Link to="/#abouUs">О нас пишут</Link>
              </li>
              <li>
                <Link to="/#tarifs">Тарифы</Link>
              </li>
              <li>
                <Link to="/#news">Новости</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbarMenu">
          <ul>
            <li>
              <Link to="/#howWork">Как это работает</Link>
            </li>
            <li>
              <Link to="/#whyBetter">Почему AIC</Link>
            </li>
            <li>
              <Link to="/#benefits">Наши преимущества</Link>
            </li>
            <li>
              <Link to="/#abouUs">О нас пишут</Link>
            </li>
            <li>
              <Link to="/#tarifs">Тарифы</Link>
            </li>
            <li>
              <Link to="/#news">Новости</Link>
            </li>
          </ul>
        </div>
        {!isAuth && (
          <div className="navbarBtn" onClick={() => setPopup(!popup)}>
            Подключиться
          </div>
        )}
        {isAuth && (
          <div className="loginIcon">
            <img src={x} alt={"выход"} onClick={() => dispatch(logout())} />
          </div>
        )}
      </div>
    </div>
  );
}
