import React from "react";
import "./AvtoRep.css";

export default function AvtoRep() {
  return (
    <div className="avtoRepWrapper">
      <div className="avtoRepContainer container">
        <div className="avtoRepTitle">Автоматизируйте свою отчетность</div>
        <div className="avtoRepSubtitle">
          Мы уверены в AIC и готовы предложить Вам бесплатное обслуживание на 2
          месяца. Хватит терять деньги, подключайтесь уже сейчас !
        </div>
        <div className="avtoRepBtn">
          <button>Попробовать бесплатно</button>
        </div>
      </div>
    </div>
  );
}