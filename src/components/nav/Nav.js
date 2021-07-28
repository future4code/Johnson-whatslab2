import React, { Component } from "react";
import Logo from "../../images/logo.png";
import './nav.css'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-blocks">
          <img src={Logo} alt="Logo do Chat" />
        </div>
        <div className="nav-blocks"></div>
        <div className="nav-blocks"></div>
      </div>
    );
  }
}

export default Nav;
