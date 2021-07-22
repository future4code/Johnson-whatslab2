import React, { Component } from "react";
import "./listaChat.css";

class ListaChat extends Component {
  render() {
    return (
      <div className="lista">
        <button className="botao">
          <i className="fa fa-plus-square"></i>
          <span>Nova Conversa</span>
        </button>
        <div className="lista-cabecalho">
          <h2>Conversas</h2>
          <button className="botao2">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="lista-pesquisar">
          <div className="pesquisar">
              <input type="text" placeholder="Pesquise aqui" required />
              <button className="botao-pesquisar">
                  <i className="fa fa-search"></i>
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListaChat;
