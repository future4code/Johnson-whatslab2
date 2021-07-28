import React, { Component, useState, createRef, useEffect } from "react";

import "./conteudoChat.css";
import Avatar from "../listaChat/Avatar";
import ChatItem from "./itemChat";

export default class ConteudoChat extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://scontent.fcrq2-1.fna.fbcdn.net/v/t31.18172-8/12356707_940357002667115_7641512045968635110_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bhnk1Lf5dRkAX9Qs1_h&_nc_ht=scontent.fcrq2-1.fna&oh=91bbb9690a7ef1c64b5b775281331338&oe=6120A5D5 ",
      type: "other",
      msg: "Boa noite turma Johnson!",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 0,
            type: this.props.usuarioSelecionado.type,
            msg: this.state.msg,
            image: this.props.usuarioSelecionado.image,
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
          this.setState({ image: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  botaoEnviar = () => {
    if (this.state.msg !== "") {
      this.chatItms.push({
        key: 0,
        type: this.props.usuarioSelecionado.type,
        msg: this.state.msg,
        image: this.props.usuarioSelecionado.image,
      });
      this.setState({ chat: [...this.chatItms] });
      this.scrollToBottom();
      this.setState({ msg: "" });
      this.setState({ image: "" });
    }
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png"
              />
              <p>Turma Johnson - Labenu</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings"></div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 1}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <input
              type="text"
              placeholder="Digite a mensagem aqui"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button
              onClick={this.botaoEnviar}
              className="btnSendMsg"
              id="sendMsgBtn"
            >
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
