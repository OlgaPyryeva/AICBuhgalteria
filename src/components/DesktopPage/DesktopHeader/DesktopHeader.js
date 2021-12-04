import React from "react";

import search from "../../img/search.svg";
import bell from "../../img/bell.svg";
import logoBlue from "../../img/logoBlue.svg";
import avatar from "../../img/MaskGroup.png";
import notifications from "../../img/Badge.svg";
import bell_ from "../../img/bell-1.svg";
import Dropdown from "react-dropdown";


export default function DesktopHeader(){
    const headerOptions = [
        "Сводная информация по всем ИП ",
        "Сводная информация по всем ИgП ",
        "Сводная информация по всем ИdП",
      ];
      const headerDefaultOption = headerOptions[0];
    return(
        <header className="header">
        <img src={logoBlue} alt={logoBlue} ></img>
        <form>
          <div className="row">
            <input
              className="inputSearch"
              type="search"
              placeholder="Поиск"
            ></input>
            <button className="buttonSearchMobile" type="submit">
              <img src={search} className="imgSearch"></img>
            </button>
          </div>
          <div>
            <Dropdown
              options={headerOptions}
              value={headerDefaultOption}
              placeholder="Select an option"
              arrowClassName="headerArrowClassName"
              controlClassName="headerControlClassName"
              menuClassName="headerMenuClassName"
            ></Dropdown>
          </div>
        </form>

        <div className="bell">
          <img src={bell} alt="bell"></img>
          <img
            src={notifications}
            alt="notifications"
            className="notifications"
          ></img>
          <img src={bell_} className="bell_"></img>
        </div>
        <div>
          <img className="avatar" src={avatar} alt="avatar"></img>
        </div>
      </header>
    );
}