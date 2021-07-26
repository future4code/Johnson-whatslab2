import React from "react";
import "./chat.css";
import ConteudoChat from "./../conteudoChat/ConteudoChat";
import Perfil from "./../perfil/Perfil";
import Lista from "./../listaChat/ListaChat";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioSelecionado: null,
    };
  }

  perfilEscolhido = (usuario) => {
    this.setState({ usuarioSelecionado: usuario });
    console.log(usuario);
  };

  render() {
    return (
      <div className="chat">
        <Lista perfilEscolhido={this.perfilEscolhido} />
        <ConteudoChat usuarioSelecionado={this.state.usuarioSelecionado} />
        <Perfil />
      </div>
    );
  }
}
