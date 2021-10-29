import React from "react";
import "../mainPage/MainPage.css";

export default function Tarifs() {
  return (
    <div className="tarifContainer">
      <div className="tarifMainTitle">Тарифные планы</div>
      <div className="tarifMainSubtitle">
        Первые 2 месяца на тарифе "Бизнес" бесплатны для всех новых
        пользователей.
      </div>
      <div className="tarifTipes">
        <div className="tarif">
          <div className="tarifTitle">Стандарт</div>
          <div className="tarifSubtitle">
            <div>Уведомления о подаче отчетов </div>
            <div>Уведомление о необходимости уплаты налогов </div>
            <div>Ведение книг ИП online </div>
            <div>
              Автоматический подсчет сумм, необходимых для уплаты налогов
            </div>
            <div>Автоматическое формирование отчетов </div>
            <div>Бухгалтерские консультации </div>
            <div>Юридические консультации </div>
          </div>
          <div className="tarifBtn">
            <button>Подробнее</button>
          </div>
        </div>
        <div className="tarif">
          <div className="tarifTitle upgradeTarif">Продвинутый</div>
          <div className="tarifSubtitle">
            <div>Уведомления о подаче отчетов </div>
            <div>Уведомление о необходимости уплаты налогов </div>
            <div>Ведение книг ИП online </div>
            <div>
              Автоматический подсчет сумм, необходимых для уплаты налогов
            </div>
            <div>Автоматическое формирование отчетов </div>
            <div>Бухгалтерские консультации </div>
            <div>Юридические консультации </div>
          </div>
          <div className="tarifBtn">
            <button>Подробнее</button>
          </div>
        </div>
        <div className="tarif">
          <div className="tarifTitle">Бизнес</div>
          <div className="tarifSubtitle">
            <div>Уведомления о подаче отчетов </div>
            <div>Уведомление о необходимости уплаты налогов </div>
            <div>Ведение книг ИП online </div>
            <div>
              Автоматический подсчет сумм, необходимых для уплаты налогов
            </div>
            <div>Автоматическое формирование отчетов </div>
            <div>Бухгалтерские консультации </div>
            <div>Юридические консультации </div>
          </div>
          <div className="tarifBtn">
            <button>Подробнее</button>
          </div>
        </div>
        <div className="tarif">
          <div className="tarifTitle">Бизнес+</div>
          <div className="tarifSubtitle">
            <div>Уведомления о подаче отчетов </div>
            <div>Уведомление о необходимости уплаты налогов </div>
            <div>Ведение книг ИП online </div>
            <div>
              Автоматический подсчет сумм, необходимых для уплаты налогов
            </div>
            <div>Автоматическое формирование отчетов </div>
            <div>Бухгалтерские консультации </div>
            <div>Юридические консультации </div>
          </div>
          <div className="tarifBtn">
            <button>Подробнее</button>
          </div>
        </div>
      </div>
      <div id="news" className="linkPlace"></div>
    </div>
  );
}
