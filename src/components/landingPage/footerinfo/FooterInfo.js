import React from "react";
import money from "../../img/money.svg";
import wallet from "../../img/wallet.svg";
import "../MainPage.css";

export default function FooterInfo() {
  return (
    <div className="footerInfoWrapper">
      <div id="news" className="linkPlace"></div>
      <div className="footerInfoContainer">
        <div className="footerInfo">
          <div className="footerInfoBlock">
            <div>
              <img src={money} alt="{money}" className="footerInfoImg" />
            </div>
            <div className="footerInfoTitle">
              Снижена сумма платежа наличными
            </div>
            <div className="footerInfoSubtitle">
              До 500 базовых снижена максимальная сумма платежа наличными...
            </div>
          </div>
        </div>
        <div className="footerInfo">
          <div>
            <img src={wallet} alt="{wallet}" className="footerInfoImg" />
          </div>
          <div className="footerInfoTitle">Снижена сумма платежа наличными</div>
          <div className="footerInfoSubtitle">
            До 500 базовых снижена максимальная сумма платежа наличными...
          </div>
        </div>
      </div>
    </div>
  );
}
