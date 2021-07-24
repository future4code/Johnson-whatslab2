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
        "https://img2.gratispng.com/20180605/jay/kisspng-computer-icons-avatar-user-profile-5b16409fd8f963.4008572815281849918887.jpg",
      type: "",
      msg: "E aí André, Como vai vc?",
    },
    {
      key: 2,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo",
      type: "other",
      msg: "Eu to bem velhinho.",
    },
    {
      key: 3,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo",
      type: "other",
      msg: "E vc como ta?",
    },
    {
      key: 4,
      image:
        "https://img2.gratispng.com/20180605/jay/kisspng-computer-icons-avatar-user-profile-5b16409fd8f963.4008572815281849918887.jpg",
      type: "",
      msg: "Estou bem graças a Deus.",
    },
    {
      key: 5,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo",
      type: "other",
      msg: "E o nosso projeto hein?",
    },
    {
      key: 6,
      image:
        "https://img2.gratispng.com/20180605/jay/kisspng-computer-icons-avatar-user-profile-5b16409fd8f963.4008572815281849918887.jpg",
      type: "",
      msg: "Pois é né velho, ta osso!",
    },
    {
      key: 7,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo",
      type: "other",
      msg: "Eu estou vendo alguns tutoriais para ver se desenrolo",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 3,
            type: "",
            msg: this.state.msg,
            image: {}
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo"
              />
              <p>André Luiz</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
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
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Digite a mensagem aqui"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}