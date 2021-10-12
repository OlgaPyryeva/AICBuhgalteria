import React from "react";
import "./HowWork.css";
// import howWork from "../../img/howWork.svg";
import dot from "../../img/dot.svg";
import dotG from "../../img/dotG.svg";
import dotB from "../../img/dotB.svg";

export default function HowWork() {
  return (
    <div className="howWorkWrapper">
      <div className="howWorkContainer container">
        <div className="howWorkTitle">
          <div>Как работает AIC</div>
        </div>
        <div className="regBlock">
          <div className="howWorkText">
            <div className="regTitle">Зарегистрируйтесь</div>
            <div className="regSubtitle">
              Укажите информацию, необходимую информацию и сразу получите
              преимущество - уведомления о необходимости подачи отчетности
            </div>
          </div>
          <div className="pointsImg">
            <img src={dot} alt="{dot}" />
            <div className="line"></div>
          </div>
        </div>
        <div className="bookBlock">
          <div className="howWorkText">
            <div className="bookTitle">Ведите книги online</div>

            <div className="bookSubtitle">
              Комфортное заполнение книг ИП с любого устройства и в любом
              удобном месте. Платформа автоматически:
              {[<br />]} - рассчитает налоги к оплате
              {[<br />]} - сформирует отчеты для подачи в гос. органы
            </div>
          </div>
          <div className="pointsImg">
            <img src={dotG} alt="{dotG}" />
            <div className="line"></div>
          </div>
        </div>
        <div className="signBlock">
          <div className="howWorkText">
            <div className="signTitle">Подключите мобильную ЭЦП</div>

            <div className="signSubtitle">
              Для полной автоматизации подачи отчетности. Вам потребуется только
              подтверждать отправку отчетов. AIC позволит избежать штрафов за
              несвоевременную подачу отчетности, даже если не заполнены книги ИП
            </div>
          </div>
          <div className="pointsImg">
            <img src={dotB} alt="{dotB}" />
          </div>
        </div>
      </div>
    </div>
  );
}
