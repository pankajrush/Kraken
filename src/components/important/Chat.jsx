import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/6798ad8c3a8427326075cd01/1iim6bsc5';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chat;


