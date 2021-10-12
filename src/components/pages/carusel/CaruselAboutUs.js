import React from "react";
import Carousel from "nuka-carousel";
import "./CaruselAboutUs.css";
import otziv from "../../img/otziv1.svg";

export default class extends React.Component {
  render() {
    return (
      <div className="aboutUsWrapper">
        <div className="aboutUsContainer container">
          <div className="aboutUsTitle">О нас пишут</div>
          <Carousel slidesToShow={3}>
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
            <img src={otziv} alt="{otziv}" />
          </Carousel>
        </div>
      </div>
    );
  }
}
