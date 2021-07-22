import React from "react";
import "./chat.css";
import ConteudoChat from "./../conteudoChat/ConteudoChat";
import Perfil from "./../perfil/Perfil";
import Lista from "./../listaChat/ListaChat";

export default class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <Lista />
        <ConteudoChat />
        <Perfil />
      </div>
    );
  }
}
