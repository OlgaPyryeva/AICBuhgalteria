import React from "react";
import money from "../../img/money.svg";
import wallet from "../../img/wallet.svg";
import "../mainPage/MainPage.css";

export default function FooterInfo() {
  return (
    <div className="footerInfoContainer">
      <div className="footerInfo">
        <div className="footerInfoBlock">
          <div>
            <img src={money} alt="{money}" />
          </div>
          <div className="footerInfoTitle">Снижена сумма платежа наличными</div>
          <div className="footerInfoSubtitle">
            До 500 базовых снижена максимальная сумма платежа наличными...
          </div>
        </div>
      </div>
      <div className="footerInfo">
        <div>
          <img src={wallet} alt="{wallet}" />
        </div>
        <div className="footerInfoTitle">Снижена сумма платежа наличными</div>
        <div className="footerInfoSubtitle">
          До 500 базовых снижена максимальная сумма платежа наличными...
        </div>
      </div>
    </div>
  );
}
