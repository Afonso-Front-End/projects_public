import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);
    newSocket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const input = document.getElementById("input");
    const message = input.value;

    if (socket) {
      socket.emit("sendMessage", message);
      console.log(message)
    }

    input.value = "";
  };
  console.log(messages)

  return (
    <>
      <div className="content">
        <div className="container-lista">

        </div>
        
        <div className="container-chat">
          <ul id="messages">
            {messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>

          <form id="form" onSubmit={sendMessage}>
            <input id="input" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
