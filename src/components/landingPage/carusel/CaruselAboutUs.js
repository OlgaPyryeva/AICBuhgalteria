import React from "react";
import Carousel from "nuka-carousel";
import "../MainPage.css";
import otziv from "../../img/otziv1.svg";

export default class extends React.Component {
  render() {
    return (
      <div className="aboutUsContainer">
        <div id="abouUs" className="linkPlace"></div>
        <div className="aboutUsTitle">О нас пишут</div>
        <div className="aboutUsBigCarusel">
          <Carousel slidesToShow={3}>
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
          </Carousel>
        </div>
        <div className="aboutUsSmallCarusel">
          <Carousel slidesToShow={1}>
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
          </Carousel>
        </div>
      </div>
    );
  }
}
