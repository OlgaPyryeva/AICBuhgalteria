import React from "react";
import checkMarkP from "../../img/checkMarkP.svg";
import checkMarkB from "../../img/checkMarkB.svg";
import checkMarkG from "../../img/checkMarkG.svg";
import checkMarkV from "../../img/checkMarkV.svg";
import "../mainPage/MainPage.css";

export default function Benefits() {
  return (
    <div className="benefitsWrapper">
      <div className="benefitsMainTitle">Наши преимущества</div>
      <div className="benefitsContainer">
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkP} alt="{checkMarkP}" />{" "}
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle">Уведомления</div>
            <div className="benefitsSubtitle">
              Система заранее напомнит о необходимости подачи всех отчетов
            </div>
          </div>
        </div>
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkB} alt="{checkMarkB}" />
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle">Формирование отчетов</div>
            <div className="benefitsSubtitle">
              Система автоматически сформирует необходимые отчеты на основании
              ваших данных
            </div>
          </div>
        </div>
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkB} alt="{checkMarkB}" />
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle">Агрегатор</div>
            <div className="benefitsSubtitle">
              Система объединяет информацию от всех государственных интернет
              порталов, участвующих в процедуре подачи необходимых отчетов
            </div>
          </div>
        </div>
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkP} alt="{checkMarkP}" />{" "}
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle"> Прогнозирование затрат </div>
            <div className="benefitsSubtitle">
              Система динамически рассчитывает сумму налогов исходя из
              оперативно вносимых данных в книги
            </div>
          </div>
        </div>
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkG} alt="{checkMarkG}" />
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle">Работа с ЭЦП </div>
            <div className="benefitsSubtitle">
              Все что требуется для подачи отчета - подтвердить его отправку
              через СМС
            </div>
          </div>
        </div>
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkV} alt="{checkMarkV}" />
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle"> Интерактивное уведомление </div>
            <div className="benefitsSubtitle">
              Система в режиме онлайн контролирует статус поданных отчетов и
              уведомляет о необходимости подачи уточненных отчетов
            </div>
          </div>
        </div>
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkV} alt="{checkMarkV}" />
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle"> Контроль </div>
            <div className="benefitsSubtitle">
              Вы всегда будете знать о статусе вашей отчётности, своевременности
              и правильности подачи, независимо от того, кто ведет бухгалтерию -
              вы или ваш бухгалтер
            </div>
          </div>
        </div>
        <div className="benefitsPoint">
          <div className="benefitsImg">
            <img src={checkMarkG} alt="{checkMarkG}" />
          </div>
          <div className="benefitsText">
            <div className="benefitsTitle">Адаптивные шаблоны документов</div>
            <div className="benefitsSubtitle">
              Система позволит сформировать уже предварительно заполненные
              документы по основному виду деятельности, кадровому учету, счета,
              фирменный бланк и т.д.
            </div>
          </div>
        </div>
      </div>
      <div id="abouUs" className="linkPlace"></div>
    </div>
  );
}
