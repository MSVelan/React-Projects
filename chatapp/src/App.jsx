import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />
  
  return (
    <ChatEngine 
      height="100vh"
      width="100vw"
      projectID="a37fad08-a702-42f8-88cf-d3cf7f61d18f"
      userName="MSV"
      userSecret="velavan"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps } />}
      onNewMessage = { ()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
}

export default App

