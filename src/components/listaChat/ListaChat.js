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
      type: "",
    },
    {
      key: 2,
      image:
        "https://scontent.fcrq2-1.fna.fbcdn.net/v/t31.18172-8/12356707_940357002667115_7641512045968635110_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bhnk1Lf5dRkAX9Qs1_h&_nc_ht=scontent.fcrq2-1.fna&oh=91bbb9690a7ef1c64b5b775281331338&oe=6120A5D5",
      name: "Anderson Leite",
      active: true,
      isOnline: true,
      type: "other",
    },
    {
      key: 3,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE1Umh4490qiA/profile-displayphoto-shrink_200_200/0/1625855121342?e=1632355200&v=beta&t=99yn6GBClvGsS_uDLePN9XEWaTfxFj2xILGtwDqFUic",
      name: "Gabriela Fogaça",
      active: true,
      isOnline: true,
      type: "other",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      todosChats: this.todosUsuarios,
    };
  }

  render() {
    return (
      <div className="lista">
        <div className="lista-cabecalho">
          <h2>Selecione o usuário</h2>
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
                perfilEscolhido={this.props.perfilEscolhido}
                item={item}
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                type={item.type}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
