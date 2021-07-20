import React from "react";
import "./chat.css";
import ChatContent from './../chatContent/ChatContent';
import UserProfile from './../userProfile/UserProfile';

export default class Chat extends React.Component {
  render() {
    return <div className="chat">
        <ChatContent />
        <UserProfile />

    </div>;
  }
}
