import React, { Component } from "react";
import Avatar from "../listaChat/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = new Date();
    let mesAtual = data.getMonth();
    switch (mesAtual) {
      case 0: mesAtual = "JAN";
        break;
        case 1: mesAtual = "FEV";
        break;
        case 2: mesAtual = "MAR";
        break;
        case 3: mesAtual = "ABR";
        break;
        case 4: mesAtual = "MAI";
        break;
        case 5: mesAtual = "JUN";
        break;
        case 6: mesAtual = "JUL";
        break;
        case 7: mesAtual = "AGO";
        break;
        case 8: mesAtual = "SET";
        break;
        case 9: mesAtual = "OUT";
        break;
        case 10: mesAtual = "NOV";
        break;
        case 11: mesAtual = "DEZ";
        break;

      default:
        break;
    }
    let diaEMes = data.getDate() + " " + mesAtual;
    let horas = data.getHours() + ":" + data.getMinutes();

    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>{diaEMes}</span>
            <span>{horas}</span>
          </div>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
