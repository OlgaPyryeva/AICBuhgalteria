import React,{useState} from "react";

import DesktopToDoList from "./DesktopToDo/DesktopToDoList";
import prev from "../../img/prev.svg";
import next from "../../img/next.svg";
import reports from "../../img/Vector-2.svg";
import reports_1 from "../../img/Vector-2.1.svg";
import toDoReports from "../../img/Vector-6.svg";
import EllipseWhiteCalendar from"../../img/EllipseWhiteCalendar.svg";
import EllipseBlueCalendar from"../../img/EllipseBlueCalendar.svg";
import DesktopToDoMenu from "./DesktopToDo/DesktopToDoMenu/DesktopToDoMenu";

export default function DesktopCalendar(){



    return(
 <div className="calendar-toDo">
          <div className="calendar">
           <div className="date">
            <div className="month">
              <ul>
                <li className="prev">
                  <img src={prev}></img>
                </li>
                <li className="next">
                  {" "}
                  <img src={next}></img>
                </li>
                <li className="date">Сентябрь 2021</li>
              </ul>
            </div>
            <ul className="weekdays">
              <li>нд</li>
              <li>пн</li>
              <li>вт</li>
              <li>ср</li>
              <li>чт</li>
              <li>пт</li>
              <li>сб</li>
              <li>вс</li>
            </ul>

            <ul className="days">
              <li>9</li>
              <li>31</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>
                <span className="active">10</span>
                <img src={EllipseWhiteCalendar} className="EllipseWhiteCalendar"></img>
              </li>
              <li>8
                <img src={EllipseBlueCalendar} className="EllipseBlueCalendar"></img>
              </li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24
              <img src={EllipseBlueCalendar} className="EllipseBlueCalendar"></img>
              </li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>1</li>
              <li>2</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>1</li>
              <li>2</li>
            </ul>
            <ul className="descrDate">
              <li>
                <span>40 часовая рабочая неделя - 400 часов</span>
              </li>
              <li>
              <span>35 часовая рабочая неделя - 350 часов</span>
              </li>
              <li>
              <span>Праздничных и выходных дней - 9</span>
              </li>
              <li>
              <span>Рабочих дней - 21</span>
              </li>
            </ul>

            </div>
           
           
           

          </div>



          <div className="toDo">
            <DesktopToDoList/>
          </div>
          

        </div> 
    );
    
}