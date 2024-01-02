import useJwtToken from '../js/Token.js';
import Conection from '../services/Conection';
import Chat from '../components/Chat.message.jsx';
export default function App() {
  Conection()
  useJwtToken()

  return (
    <>
      <Chat/>
    </>
  );
}

