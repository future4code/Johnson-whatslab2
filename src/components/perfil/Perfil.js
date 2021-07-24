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
            <img src="https://img2.gratispng.com/20180605/jay/kisspng-computer-icons-avatar-user-profile-5b16409fd8f963.4008572815281849918887.jpg" />
          </div>
          <h4>Anderson Heiderich</h4>
          <p>Desenvolvedor Front-end React</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Desta maneira, o desenvolvimento contínuo de distintas formas de
            atuação ainda não demonstrou convincentemente que vai participar na
            mudança das condições financeiras e administrativas exigidas.
          </div>
        </div>
      </div>
    );
  }
}
