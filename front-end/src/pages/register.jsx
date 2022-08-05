import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (

    <div>
      <header>
        <h2>Cadastro</h2>
      </header>
      <div>
        <form>
          <label htmlFor="#">
            Nome
            <input
              type="text"
              data-testid="6"
              className="input-name"
              placeholder="Seu nome"
              onChange={ () => setName(name) }
            />
          </label>

          <label htmlFor="#">
            Email
            <input
              type="text"
              data-testid="7"
              className="input-email"
              placeholder="Digite seu email"
              onChange={ () => setName(name) }
            />
          </label>

          <label htmlFor="#">
            Senha
            <input
              type="password"
              data-testid="8"
              className="input-password"
              placeholder="Digite sua senha"
              onChange={ () => setName(name) }
            />
          </label>

          <button
            type="button"
            data-testid="9"
          >
            Cadastrar
          </button>

        </form>
      </div>
    </div>
  );
}
export default Register;
