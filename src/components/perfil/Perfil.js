import React, { Component } from "react";
import "./perfil.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif" />
          </div>
          <h4>LABENU</h4>
          <p>Educação que reinventa</p>
        </div>
        <div className="profile__card" >
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Ver mais</h4>
            <i className="fa fa-angle-down" ></i>
          </div>
          <div className="card__content">
            Na Labenu você aprende a programar do zero! Nossa formação Web Full
            Stack contém experiências focadas em empregabilidade para ingressar
            no mercado de tecnologia.
          </div>
        </div>
      </div>
    );
  }
}
