import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [message, setMessage] = useState('Hej från oss!');
  return (
    <div className="App">
      <Form message={message} />
    </div>
  );
}

export default App;
