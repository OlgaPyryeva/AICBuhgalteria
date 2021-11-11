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
            <div className="BtnTry">
              <button>Попробовать</button>
            </div>
            <div className="BtnAbout">
              <button>Как это работает</button>
            </div>
          </div>
        </div>
        <div className="homeImgContainer">
          <img src={robot} alt="{robot}" className="homeImg" />
        </div>
      </div>
    </div>
  );
}
