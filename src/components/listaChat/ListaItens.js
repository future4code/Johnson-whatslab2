import React, { Component } from "react";
import Avatar from "./Avatar";

class ListaItens extends Component {
  constructor(props) {
    super(props);
  }
  selecionarChat = (event) => {
    for (
      let index = 0;
      index < event.currentTarget.parentNode.children.length;
      index++
    ) {
      event.currentTarget.parentNode.children[index].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  };
  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selecionarChat}
        className={`lista-item ${this.props.active ? this.props.active : ""}`}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : "https://placehold.it/80x80"
          }
          isOnline={this.props.isOnline}
        />
        <div className="userMeta">
          <p>{this.props.name}</p>
          <span className="activeTime">32 mins</span>
        </div>
      </div>
    );
  }
}

export default ListaItens;
