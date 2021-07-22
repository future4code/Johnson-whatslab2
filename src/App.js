import "./App.css";
import Nav from './components/nav/Nav.js';
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="chat-main">
      <Nav></Nav>
      <Chat />
    </div>
  );
}

export default App;
