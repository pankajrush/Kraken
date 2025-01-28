import React, { useState } from "react";
import "./Important.css";
import logo from "../../assets/kraken logo.png";
import Chat from "./Chat";

const Important = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatButtonClick = () => {
    setShowChat(true); 
  };
  return (
    <>
      {showChat && <Chat />}
      <div className="body">
        <img src={logo} alt="" />
        <div class="container">
          <h1>ALERT !</h1>
          <p>
            Multiple suspicious files and Virus found in your device. Contact
            Support for further help.
          </p>
          <h3>Error CODE: EBRX16X76D</h3>
          <button onClick={handleChatButtonClick}>Contact Chat Support</button>
        </div>
      </div>
    </>
  );
};

export default Important;