import React from "react";

import line from "../../img/divider.svg";
import Dropdown from "react-dropdown";
import circleColumn from "../../img/circleColumn.svg";
import pointerColumn from "../../img/pointerColumn.svg";



export default function DesktopChart() {

const chartOptions = ["вчера", "сегодня", "31.10.2021"];
const chartDefaultOption = chartOptions[0];
  return (
    <div className="chart">
      <div className="row chart-header">
        <div>
          <span>График результатов работы</span>
        </div>

        <div>
          <Dropdown
            options={chartOptions}
            value={chartDefaultOption}
            placeholder={chartOptions}
            arrowClassName="chartArrowClassName"
            controlClassName="chartControlClassName"
            menuClassName="chartMenuClassName"
          ></Dropdown>
        </div>
      </div>

      <div>
        <div className="chart-sizes">
          <ul>
            <li className="row ">
              <span>20</span>
              <img className="line" src={line}></img>
            </li>

            <li className="row">
              <span>15</span>
              <img className="line" src={line}></img>
            </li>

            <li className="row">
              <span>10</span>
              <img className="line" src={line}></img>
            </li>

            <li className="row">
              <span className="five">5</span>
              <img className="line" src={line}></img>
            </li>

            <li className="row">
              <span></span>
              <img className="line" src={line}></img>
            </li>
          </ul>
        </div>

        <div className="row">
          <div>
            <div>
              <div className="column column1 blue">
                <img src={circleColumn} className="circleColumn"></img>
                <img src={pointerColumn} className="pointerColumn"></img>
              </div>

              <div className="column column2 azure">
                <div className="tnttn">13 ТН/ТТН</div>
              </div>
            </div>
            <p className="descriptionСolumn ttn">ТН/ТТН</p>
          </div>

          <div>
            <div>
              <div className="column column3 blue"></div>
              <div className="column column4 azure"></div>
            </div>
            <p className="descriptionСolumn act">Актов</p>
          </div>

          <div>
            <div>
              <div className="column column5 blue"></div>
              <div className="column column6 azure"></div>
            </div>
            <p className="descriptionСolumn score">Счетов</p>
          </div>

          <div>
            <div>
              <div className="column column7 blue"></div>
              <div className="column column8 azure"></div>
            </div>
            <p className="descriptionСolumn pay">Платежей</p>
          </div>
        </div>
      </div>

      <div className="row chartTime ">
        <div className="row">
          <div className="square blue"></div>
          <span className="TimeDescr">За текущий период</span>
        </div>
        <div className="row">
          <div className="square azure"></div>
          <span className="TimeDescr">За прошлый период</span>
        </div>
      </div>
    </div>
  );
}
