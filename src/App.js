import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';

function App() {
  const [message, setMessage] = useState('Hej från oss!');
  const updateMessageInApp = (newMessage) => {
    //update state
    setMessage(newMessage);
  }
  return (
    <div className="App">
      <Info message={message} />
      <Form setMessageInApp={updateMessageInApp} />
    </div>
  );
}

export default App;
