import React from "react";
import "../mainPage/MainPage.css";
// import howWork from "../../img/howWork.svg";

export default function HowWork() {
  return (
    <div className="howWorkWrapper">
      <div id="howWork" className="linkPlace"></div>
      <div className="howWorkTitle">
        <div>Как работает AIC</div>
      </div>
      <div className="howWorkContainer">
        <div className="leftText">
          <div className="regTitle">Зарегистрируйтесь</div>
          <div className="regSubtitle">
            Укажите информацию, необходимую информацию и сразу получите
            преимущество - уведомления о необходимости подачи отчетности
          </div>
          <div className="emptyBlock"></div>
          <div className="signTitle">Подключите мобильную ЭЦП</div>
          <div className="signSubtitle">
            Для полной автоматизации подачи отчетности. Вам потребуется только
            подтверждать отправку отчетов. AIC позволит избежать штрафов за
            несвоевременную подачу отчетности, даже если не заполнены книги ИП
          </div>
        </div>
        <div className="imgBlock">
          <div className="pointsImg">
            <div className="dot"></div>
          </div>
          <div className="howWorkLine"></div>
          <div className="pointsImgG">
            <div className="dotG"></div>
          </div>
          <div className="line"></div>
          <div className="pointsImgB">
            <div className="dotB"></div>
          </div>
        </div>

        <div className="rightBlock">
          <div className="howWorkText">
            <div className="bookTitle">Ведите книги online</div>

            <div className="bookSubtitle">
              Комфортное заполнение книг ИП с любого устройства и в любом
              удобном месте. Платформа автоматически:
              {[<br />]} - рассчитает налоги к оплате
              {[<br />]} - сформирует отчеты для подачи в гос. органы
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
