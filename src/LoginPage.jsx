import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginPage() {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      navigate('/messages', { state: { userName: name } });
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Confirmar</button>
    </div>
  );
}

export default LoginPage;
