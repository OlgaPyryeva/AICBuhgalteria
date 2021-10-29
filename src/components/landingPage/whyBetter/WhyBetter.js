import React from "react";
import whyBetterPage from "../../img/whyBetterPage.svg";
import whyBetterBag from "../../img/whyBetterBag.svg";
import whyBetter$ from "../../img/whyBetter$.svg";
import whyBetterTime from "../../img/whyBetterTime.svg";
import "../mainPage/MainPage.css";

export default function WhyBetter() {
  return (
    <div>
      <div className="whyBetterTitle">Почему AIC лучше бухгалтера?</div>
      <div className="whyBetterContainer">
        <div className="whyBetterSubtitle">
          <img src={whyBetterPage} alt="{whyBetterPage}" />
          <h3>Не забудет подать отчет</h3>
          <p>
            Система контролирует сроки и полноту подачи отчетности в
            круглосуточном режиме
          </p>
        </div>
        <div className="whyBetterSubtitle">
          <img src={whyBetterBag} alt="{whyBetterBag}" />
          <h3>Комфорт в работе</h3>
          <p>
            Всегда в хорошем настроении, не болеет и не уходит в отпуск.
            Доступна с мобильных устройств
          </p>
        </div>
        <div className="whyBetterSubtitle">
          <img src={whyBetter$} alt="{whyBetter$}" />
          <h3>Экономия средств</h3>
          <p>
            Система позволит сэкономить на зарплате бухгалтера, возможных
            штрафах, а, в некоторых случаях, еще и на шоколадках
          </p>
        </div>
        <div className="whyBetterSubtitle">
          <img src={whyBetterTime} alt="{whyBetterTime}" />
          <h3>Экономия времени</h3>
          <p>
            Система позволит сэкономить время, заполнив отчеты за вас и подав их
            в нужный срок, даже если вы забыли это сделать
          </p>
        </div>
      </div>
      <div id="benefits" className="linkPlace"></div>
    </div>
  );
}
