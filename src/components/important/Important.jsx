import React, { useState } from "react";
import "./Important.css";
import logo from "../../assets/kraken logo.png";
import Chat from "./Chat";

const Important = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(true); // First, make sure Chat component is loaded

    setTimeout(() => {
      if (window.Tawk_API) {
        window.Tawk_API.maximize(); // 🚀 Forcefully open chat
      } 
    }, 1000); // Add slight delay to ensure script is loaded
  };

  return (
    <>
      {showChat && <Chat />}
      <div className="body">
        <img src={logo} alt="Logo" />
        <div className="container">
          <h1>ALERT !</h1>
          <p>
            Multiple suspicious files and viruses found in your device. Contact
            Support for further help.
          </p>
          <h3>Error CODE: EBRX16X76D</h3>
          <button onClick={handleChatToggle}>Contact Chat Support</button>
        </div>
      </div>
    </>
  );
};

export default Important;
