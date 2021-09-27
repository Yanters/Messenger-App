import React from "react";
import { useHistory } from "react-router";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {
  const history = useHistory();

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">MessengerApp</div>
        <div className="logout-tab" onClick={logoutHandler}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="b3d12e55-c401-43d2-8f10-e7f95d584947"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
