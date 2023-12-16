import useScript from "../js/Script";

import useJwtToken from "../js/Jwt";

function App() {

  const { messages, sendMessage } = useScript()
  const { TOKEN , TOKENDECODIFICADO} = useJwtToken()


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
