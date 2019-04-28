import React, { Component } from "react";
import api from "./services/api";

import Dice from "./images/dice.svg";

import Card from "./Card";

import "bootstrap/dist/css/bootstrap.css";

import { GlobalStyle, Container, ImageBottom } from "./style/styles";

export default class App extends Component {
  state = {
    character: ""
  };

  componentDidMount() {
    this.loadcharacter();
  }

  loadcharacter = async () => {
    const numberRandom = Math.floor(Math.random() * 10 + 1);

    const response = await api.get(`/people/${numberRandom}`);

    this.setState({ character: response.data });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Container>
              <GlobalStyle whiteColor />

              <Card
                name={this.state.character.name}
                height={this.state.character.height}
                mass={this.state.character.mass}
                gender={this.state.character.gender}
                birth={this.state.character.birth_year}
              />

              <ImageBottom onClick={this.loadcharacter}>
                <img src={Dice} alt="Dado" width="120" />
              </ImageBottom>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
