import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';

function App() {
  const [message, setMessage] = useState('Hej från oss!');
  return (
    <div className="App">
      <Info message={message} />
      <Form />
    </div>
  );
}

export default App;
