import React from "react";
import whyBetterPage from "../../img/whyBetterPage.svg";
import whyBetterBag from "../../img/whyBetterBag.svg";
import whyBetter$ from "../../img/whyBetter$.svg";
import whyBetterTime from "../../img/whyBetterTime.svg";
import "../mainPage/MainPage.css";

export default function WhyBetter() {
  return (
    <div className="whyBetterBlock">
      <div id="whyBetter" className="linkPlace"></div>
      <div className="whyBetterTitle">Почему AIC лучше бухгалтера?</div>
      <div className="whyBetterContainer">
        <div className="whyBetterSubtitle">
          <img src={whyBetterPage} alt="{whyBetterPage}" />
          <div className="whyBetterSubtitleTitle">Не забудет подать отчет</div>
          <div>
            Система контролирует сроки и полноту подачи отчетности в
            круглосуточном режиме
          </div>
        </div>
        <div className="whyBetterSubtitle">
          <img src={whyBetterBag} alt="{whyBetterBag}" />
          <div className="whyBetterSubtitleTitle">Комфорт в работе</div>
          <div>
            Всегда в хорошем настроении, не болеет и не уходит в отпуск.
            Доступна с мобильных устройств
          </div>
        </div>
        <div className="whyBetterSubtitle">
          <img src={whyBetter$} alt="{whyBetter$}" />
          <div className="whyBetterSubtitleTitle">Экономия средств</div>
          <div>
            Система позволит сэкономить на зарплате бухгалтера, возможных
            штрафах, а, в некоторых случаях, еще и на шоколадках
          </div>
        </div>
        <div className="whyBetterSubtitle">
          <img src={whyBetterTime} alt="{whyBetterTime}" />
          <div className="whyBetterSubtitleTitle">Экономия времени</div>
          <div>
            Система позволит сэкономить время, заполнив отчеты за вас и подав их
            в нужный срок, даже если вы забыли это сделать
          </div>
        </div>
      </div>
    </div>
  );
}
