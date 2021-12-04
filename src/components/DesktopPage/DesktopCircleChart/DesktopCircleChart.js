import React from "react";

import circleEllipseLess from "../../img/circleEllipseLess.svg";
import circleStripeLess from "../../img/circleStripeLess.svg";
import circleEllipseMore from "../../img/circleEllipseMore.svg";
import circleStripeMore from "../../img/circleStripeMore.svg";

export default function DesktopCircleChart() {
  return (
    <div className="circleСhart">
      <div className="cicleCenter">
        <div className="circleСhart-header">
          <div>
            <p>Внесено и выписано за:</p>
            <p>вчера</p>
          </div>
        </div>

        <div className="circle"></div>
        <p className="circleNumberTitle">48</p>
        <div className="circleLess">
          <p className="circleNumLess">35</p>
          <img src={circleStripeLess} className="circleStripeLess"></img>
          <img src={circleEllipseLess} className="circleEllipseLess"></img>
        </div>
        <div className="circleMore">
          <p className="circleNumMore">48</p>
          <img src={circleStripeMore} className="circleStripeMore"></img>
          <img src={circleEllipseMore} className="circleEllipseMore"></img>
        </div>

        <div>
          <span className="positionsTtn">Позиций в ТН/ТТН</span>
        </div>

        <div className="circleTimeDescr">
          <div className="row">
            <div className="circleDescr circleBlue"></div>
            <span className="TimeDescr">За текущий период</span>
          </div>
          <div className="row">
            <div className="circleDescr circleAzure"></div>
            <span className="TimeDescr">За прошлый период</span>
          </div>
        </div>
      </div>
    </div>
  );
}
