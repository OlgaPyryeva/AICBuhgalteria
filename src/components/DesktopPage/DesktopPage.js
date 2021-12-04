import React, { useState } from "react";
import "./DesktopPage.css";
import DesktopPageMenu from "./DesktopPageMenu/DesktopPageMenu";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import DesktopChart from "./DesktopChart/DesktopChart";
import DesktopCircleChart from "./DesktopCircleChart/DesktopCircleChart";
import DesktopScrollTable from "./DesktopScrollTable/DesktopScrollTable";
import DesktopCalendar from "./DesktopCalendar/DesktopCalendar";

import search from "../img/search.svg";
import bell from "../img/bell.svg";
import logoBlue from "../img/logoBlue.svg";
import avatar from "../img/MaskGroup.png";
import notifications from "../img/Badge.svg";
import bell_ from "../img/bell-1.svg";
import prev from "../img/prev.svg";
import next from "../img/next.svg";
import reports from "../img/Vector-2.svg";
import reports_1 from "../img/Vector-2.1.svg";
import toDoReports from "../img/Vector-6.svg";
import line from "../img/divider.svg";
import Dropdown from "react-dropdown";
import circleColumn from "../img/circleColumn.svg";
import pointerColumn from "../img/pointerColumn.svg";
import circleEllipseLess from "../img/circleEllipseLess.svg";
import circleStripeLess from "../img/circleStripeLess.svg";
import circleEllipseMore from "../img/circleEllipseMore.svg";
import circleStripeMore from "../img/circleStripeMore.svg";

const DesktopPage = () => {
  
  const [menuActive, setmenuActive] = useState(false);
  const items = [
    { value: "Главная", href: "/main", className: "menuTitle" },
    { value: "Контрагенты", href: "/сounterparties" },
    { value: "Отчеты", href: "/reports" },
    { value: "Валютные операции", href: "/main" },
    { value: "Визитка", href: "/main" },
    { value: "Новости", href: "/main" },
  ];
  const itemsScrollTableThead = [
    { value: "Доходы", colSpan:"2" },
    { value: "Расходы", colSpan:"2"},
    { value: "Остаток денежных средств",colSpan:"2"},
    { value: "Всего ТН/ТТН Выписано/Внесено", colSpan:"4"},
    { value: "Позиций ТН/ТТН Выписано/Внесено",colSpan:"4" },
    { value: "Платежей Проведено", colSpan:"2" },
    { value: "Отчеты Подать/Принято/Отклонено",colSpan:"3"},
    { value: "Документы Выписано/Внесено",colSpan:"4" },
    { value: "Уведомления", colSpan:"2" },
    { value: "..." , className:""},
  ];

  const headerOptions = [
    "Сводная информация по всем ИП ",
    "Сводная информация по всем ИgП ",
    "Сводная информация по всем ИdП",
  ];
  const tableOptions = ["ИП", "Самозанятый"];
  const chartOptions = ["вчера", "сегодня", "31.10.2021"];


  const headerDefaultOption = headerOptions[0];
  const chartDefaultOption = chartOptions[0];
  // const tableDefaultOptions = tableOptions[0];


  return (
    
    <div className="DesktopPage">
      <nav
      // onMouseOver={() => setmenuActive(!menuActive)}
      // onMouseOut={() => setmenuActive(false)}
      >
        <div className="menu__column">
          <div
            className="burger"
            onClick={() => setmenuActive(!menuActive)}
          ></div>
          <div className="rectangle" onClick={() => setmenuActive(!menuActive)}>
            <div
              className="main"
              onClick={() => setmenuActive(!menuActive)}
            ></div>
          </div>
          <div
            className="counterparties"
            onClick={() => setmenuActive(!menuActive)}
          ></div>

          <div className="reports" onClick={() => setmenuActive(!menuActive)}>
            <div
              className="reports_1"
              onClick={() => setmenuActive(!menuActive)}
            ></div>
          </div>
          <div
            className="transactions"
            onClick={() => setmenuActive(!menuActive)}
          ></div>
          <div
            className="card"
            onClick={() => setmenuActive(!menuActive)}
          ></div>
          <div
            className="news"
            onClick={() => setmenuActive(!menuActive)}
          ></div>
        </div>
      </nav>
      <DesktopPageMenu
        active={menuActive}
        setActive={setmenuActive}
        header={"Burger"}
        items={items}
      />
      
    <DesktopHeader/>
      <main>
        <div className="row">
          <DesktopChart/>
          <DesktopCircleChart/>
        </div>


        <DesktopScrollTable
        colSpan={itemsScrollTableThead}
        items={itemsScrollTableThead}
        />

        <div className="row standardDoc">

          <a href='#' className="blueDoc">
            <div>Договор</div>
          </a>

          <a href='#' className="blueDoc">
            <div>Протокол согласования цены</div>
          </a>

          <a href='#'className="blueDoc" >
            <div>Накладная</div>
          </a>

          <a href='#'className="blueDoc">
            <div>Счет-фактура</div>
          </a>

          <a href='#'className="blueDoc">
            <div>Акт</div>
          </a>
        </div>

       <DesktopCalendar/>
      </main>
    </div>
  );
};
export default DesktopPage;
