import React, { Component } from "react";
import ListaItens from "./ListaItens";
import "./listaChat.css";

export default class ListaChat extends Component {
  todosUsuarios = [
    {
      key: 1,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo",
      name: "André Luiz",
      active: true,
      isOnline: true,
    },
    {
      key:2,
      image:
        "https://img2.gratispng.com/20180605/jay/kisspng-computer-icons-avatar-user-profile-5b16409fd8f963.4008572815281849918887.jpg",
      name: "Anderson Leite",
      active: true,
      isOnline: true,
    },
    {
      key:3,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE1Umh4490qiA/profile-displayphoto-shrink_200_200/0/1625855121342?e=1632355200&v=beta&t=99yn6GBClvGsS_uDLePN9XEWaTfxFj2xILGtwDqFUic",
      name: "Gabriela Fogaça",
      active: true,
      isOnline: false,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      todosChats: this.todosUsuarios,
    }
  }

  render() {
    return (
      <div className="lista">
        <button className="botao">
          <i className="fa fa-plus-square"></i>
          <span>Novo usuário</span>
        </button>
        <div className="lista-cabecalho">
          <h2>Usuários</h2>
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
        <div className="lista-itens">
          {this.state.todosChats.map((item, index) => {
            return (
              <ListaItens
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}