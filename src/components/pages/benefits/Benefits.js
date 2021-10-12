import React from "react";
import checkMarkP from "../../img/checkMarkP.svg";
import checkMarkB from "../../img/checkMarkB.svg";
import checkMarkG from "../../img/checkMarkG.svg";
import checkMarkV from "../../img/checkMarkV.svg";
import "./Benefits.css";

export default function Benefits() {
  return (
    <div className="benefitsWrapper">
      <div className="benefitsMainTitle">Наши преимущества</div>
      <div className="benefitsContainer container">
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkP} alt="{checkMarkP}" />
            <h3>Уведомления</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>Система заранее напомнит о необходимости подачи всех отчетов</p>
          </div>
        </div>
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkB} alt="{checkMarkB}" />
            <h3>Формирование отчетов</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>
              Система автоматически сформирует необходимые отчеты на основании
              ваших данных
            </p>
          </div>
        </div>
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkB} alt="{checkMarkB}" />
            <h3>Агрегатор</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>
              Система объединяет информацию от всех государственных интернет
              порталов, участвующих в процедуре подачи необходимых отчетов
            </p>
          </div>
        </div>
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkP} alt="{checkMarkP}" />
            <h3>Прогнозирование затрат</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>
              Система динамически рассчитывает сумму налогов исходя из
              оперативно вносимых данных в книги
            </p>
          </div>
        </div>
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkG} alt="{checkMarkG}" />
            <h3>Работа с ЭЦП</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>
              Все что требуется для подачи отчета - подтвердить его отправку
              через СМС
            </p>
          </div>
        </div>
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkV} alt="{checkMarkV}" />
            <h3>Интерактивное уведомление</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>
              Система в режиме онлайн контролирует статус поданных отчетов и
              уведомляет о необходимости подачи уточненных отчетов
            </p>
          </div>
        </div>
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkV} alt="{checkMarkV}" />
            <h3>Контроль</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>
              Вы всегда будете знать о статусе вашей отчётности, своевременности
              и правильности подачи, независимо от того, кто ведет бухгалтерию -
              вы или ваш бухгалтер
            </p>
          </div>
        </div>
        <div>
          <div className="benefitsTitle">
            <img src={checkMarkG} alt="{checkMarkG}" />
            <h3>Адаптивные шаблоны документов</h3>
          </div>
          <div className="benefitsSubtitle">
            <p>
              Система позволит сформировать уже предварительно заполненные
              документы по основному виду деятельности, кадровому учету, счета,
              фирменный бланк и т.д.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
