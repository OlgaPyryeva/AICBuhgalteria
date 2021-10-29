import React from "react";
import robot from "../../img/robot.svg";
import "../mainPage/MainPage.css";

export default function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <div className="homeText">
          <div className="homeTitle">
            Хватит тратить деньги на бухгалтерию - займитесь бизнесом
          </div>
          <div className="homeSubtitle">
            AIC - программа автоматизации ведения и подачи бухгалтерской
            отчетности для ИП, которая экономит ваше время и ваши деньги
          </div>
          <div className="homeButtons">
            <button className="BtnTry">Попробовать</button>
            <button className="BtnAbout">Как это работает</button>
          </div>
        </div>
        <div className="homeImgContainer">
          <img src={robot} alt="{robot}" className="homeImg" />
        </div>
      </div>
      <div id="howWork" className="linkPlace"></div>
    </div>
  );
}
