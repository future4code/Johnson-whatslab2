import React from "react";
import "./chat.css";
import ConteudoChat from './../conteudoChat/ConteudoChat';
import Perfil from './../perfil/Perfil';

export default class Chat extends React.Component {
  render() {
    return <div className="chat">
        <ConteudoChat />
        <Perfil />

    </div>;
  }
}
