import React, { Component } from "react";

import { ReactComponent as Paper } from "./images/paper.svg";

import anonymous from "../images/anonymous.png";
import R2 from "../images/r2d2.png";
import Kenobi from "../images/kenobi.png";
import Luke from "../images/luke.png";
import Biggs from "../images/biggs.png";
import Leia from "../images/leia.png";
import Darth from "../images/darth.png";
import c3p0 from "../images/c3p0.png";

import { CardStyle } from "../style/styles";

export default class Card extends Component {
  informGender = gender => {
    switch (gender) {
      case "male":
        return "masculino";
      case "female":
        return "feminino";
      default:
        return "n/a";
    }
  };

  informBirth = birth => {
    if (birth === "unknown") return 0;

    return birth.replace("BBY", "");
  };

  renderImage = name => {
    switch (name) {
      case "R2-D2":
        return <img src={R2} alt="R2 - D2" width="90px" height="100px" />;
      case "Obi-Wan Kenobi":
        return <img src={Kenobi} alt="Kenobi" width="90px" height="100px" />;
      case "Luke Skywalker":
        return <img src={Luke} alt="Luke" width="90px" height="100px" />;
      case "Biggs Darklighter":
        return <img src={Biggs} alt="Biggs" width="90px" height="100px" />;
      case "Leia Organa":
        return <img src={Leia} alt="Leia" width="90px" height="100px" />;
      case "Darth Vader":
        return (
          <img src={Darth} alt="Darth Vader" width="90px" height="100px" />
        );
      case "C-3PO":
        return <img src={c3p0} alt="C-3PO" width="90px" height="100px" />;
      default:
        return (
          <img src={anonymous} alt="anonymous" width="90px" height="100px" />
        );
    }
  };

  renderHeight = height => {
    return height / 100;
  };

  render() {
    const { name, height, mass, gender, birth } = this.props;

    const randomColor = require("randomcolor");
    const color = randomColor({
      luminosity: "random",
      hue: "random",
      format: "rgb"
    });

    const borderColor = randomColor({
      color,
      alpha: 0.5
    });

    return (
      <CardStyle color={color} borderColor={borderColor}>
        <div className="circle">{this.renderImage(name)}</div>
        <div className="title">{name}</div>
        <div className="content">
          <div>
            <strong>Altura: </strong>
            <span>{this.renderHeight(height)} metros</span>
          </div>

          <div>
            <strong>Peso: </strong> <span>{mass ? mass : "0"} quilos</span>
          </div>

          <div>
            <strong>Sexo: </strong>
            <span>{gender ? this.informGender(gender) : "n/a"}</span>
          </div>

          <div>
            <strong>Idade: </strong>
            <span>{birth ? `${this.informBirth(birth)} anos` : "0"}</span>
          </div>
        </div>

        <div className="content-link">
          <a
            href="https://www.youtube.com/watch?v=-5f7oR0vMAM"
            target="_blank"
            className="button"
          >
            <Paper />
            Veja mais
          </a>
        </div>
      </CardStyle>
    );
  }
}
