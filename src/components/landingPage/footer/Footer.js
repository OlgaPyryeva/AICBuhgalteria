import React from "react";
import "../mainPage/MainPage";
import logo from "../../img/logo.svg";
import data from "../../img/data.svg";
import gmail from "../../img/gmail.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";

export default function Footer() {
  return (
    <div className="footerContainer ">
      <div className="footerBlocks">
        <div className="leftBlock">
          <div className="footerLogo">
            <img src={logo} alt="{logo}" />
          </div>
          <div className="footerFone">Телефон: +375 (33) 649-78-93</div>
          <div className="footerEmail">E-mail: epodacha@gmail.com</div>
          <div className="footerCompanyInfo">
            ООО "Еподача" Зарегистрировано Минским горисполкомом 12.04.2021, УНП
            191304775 г.Минск, пр-т Дзержинского, 57, 10 этаж, помещение 45-1.
            Режим работы предприятия: пн.-пт. 09.00-17.00, вых. дн. – сб., вс.
            Режим работы сайта – круглосуточно. E-mail ООО "Еподача"
            nadezhda.chernookaya@gmail.com р/с BY12ALFA30122600730090270000 ЗАО
            "Альфа-банк" 220013 г. Минск, ул. Сурганова, 43‑47
          </div>
          <div className="footerBtn">
            <div>
              <button className="gmail">
                <img src={gmail} alt="{gmail}" />
              </button>
            </div>
            <div>
              <button className="facebook">
                <img src={facebook} alt="{facebook}" />
              </button>
            </div>

            <div>
              <button className="twitter">
                <img src={twitter} alt="{twitter}" />
              </button>
            </div>
          </div>
        </div>
        <div className="rightBlock">
          <div className="rightBlockTitle">Остались вопросы?</div>
          <div className="footerForm">
            <input type="email" placeholder="Email" />
          </div>
          <div className="footerForm">
            <input type="text" placeholder="Телефон" />
          </div>
          <div className="footerForm">
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div className="footerFormTextarea">
            <textarea placeholder="Ваше сообщение" />
          </div>
          <div className="footerForm footerFormBtn">
            <button>Задать вопрос</button>
          </div>
        </div>
      </div>
      <div className="data">
        <div>
          <img src={data} alt="{data}" />
        </div>
      </div>
    </div>
  );
}
